import Tab from './layout'

export default function TabContent() {
  return (
    <Tab>
      <ul>
        <li>
          <input type="radio" id="tab1" className="rdTab" name="tabs" checked />
          <label for="tab1" className="tabLabel">Repo</label>
          <div className="tabContent">
            <article>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In interdum, felis sed feugiat tristique, massa nisl pretium ligula, vel finibus risus lacus at mauris. Proin vel mollis augue. Sed non auctor ipsum, congue facilisis diam. Proin sed enim odio. Ut libero mi, luctus sit amet tincidunt a, ullamcorper sit amet ex. Duis faucibus condimentum lectus, id accumsan diam posuere eu. Cras eu blandit dui, vitae lacinia velit. Aliquam gravida massa a velit pulvinar, ut placerat sem tristique. Vivamus dictum, quam nec pharetra iaculis, risus velit dapibus nunc, quis lobortis sapien ligula mollis nunc. Praesent elementum rutrum tincidunt. Phasellus at lacinia lectus.
            </article>
          </div>
        </li>
        <li>
          <input type="radio" name="tabs" className="rdTab" id="tab2" />
          <label for="tab2" className="tabLabel">Starred</label>
          <div className="tabContent">
            <article>
              Sed sit amet mauris vitae lorem pretium congue. Donec pulvinar auctor est, a porta ipsum vulputate ac. Ut sit amet sollicitudin ante. Sed gravida nulla et nibh consequat sagittis. Donec eu justo eu tortor elementum scelerisque. Mauris mollis volutpat tellus, id volutpat massa ultricies vel. Donec mollis arcu leo, ac ullamcorper eros viverra ut. Aliquam cursus justo nec purus condimentum, eu dignissim nunc mattis. Sed fermentum sollicitudin felis mattis malesuada. Quisque tempor tellus a odio euismod, non suscipit justo laoreet. Curabitur vel urna lorem. Pellentesque semper justo leo, in tristique ex porta at. Sed justo massa, lobortis quis hendrerit ac, eleifend vitae tellus.
            </article>
          </div>
        </li>
      </ul>
    </Tab>
  )
}
