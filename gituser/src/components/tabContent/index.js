import Tab from './layout'
import RepositoryItem from '../cardRepo/index'

import React, { useEffect, useState } from "react";
import useGithub from '../../hooks/gitHook'

export default function TabContent() {

  const { githubState, getUserRepos, getUserStarred } = useGithub();
  const [hasUserForSearchrepos, setHasUserForSearchrepos] = useState(false);

  useEffect(() => {
    if (githubState.user.login) {
      getUserRepos(githubState.user.login);
      getUserStarred(githubState.user.login);
    }
    setHasUserForSearchrepos(githubState.repositories);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [githubState.user.login]);

  return (
    <>
      {hasUserForSearchrepos ? (
        <Tab selectInputClassName='rdTab'
          selectDivClassName='tabContent'>
          <ul>
            <li>
              <input type="radio" id="tab1" className="rdTab" name="tabs" checked />
              <label for="tab1" className="tabLabel">Repo</label>
              <div className="tabContent">
                {githubState.repositories.map((item) => (
                  <RepositoryItem
                    key={item.id}
                    name={item.name}
                    linkToRepo={item.full_name}
                    fullName={item.full_name}
                  />
                ))}
              </div>
            </li>
            <li>
              <input type="radio" name="tabs" className="rdTab" id="tab2" />
              <label for="tab2" className="tabLabel">Starred</label>
              <div className="tabContent">
                {githubState.starred.map((item) => (
                  <RepositoryItem
                    key={item.id}
                    name={item.name}
                    linkToRepo={item.full_name}
                    fullName={item.full_name}
                  />
                ))}
              </div>
            </li>
          </ul>
        </Tab>
      ) : (
        <></>
      )}
    </>
  )
}
