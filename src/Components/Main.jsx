
const user = { imageUrl: "./1st.png", imageSize: 90 };
const Main = () => (
  <main>
    <article>
    <a href="#Women">11/12/20</a>
      <h2>On the Street in Brooklyn</h2>
      <img
          src="./1st.png"
          srcset={user.imageUrl}
        />
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vehicula...</p>
      <a href="#readmore1" className="read-more">continues...</a>
    </article>
    <article>
      <h2>Blog Post Title 2</h2>
      <img
          src="./2nd.png"
        />
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vehicula...</p>
      <a href="#readmore2" className="read-more">continues...</a>
    </article>
  </main>
);

export default Main;
