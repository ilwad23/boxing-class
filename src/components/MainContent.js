import React from 'react';import { Icon } from "@iconify/react";
import Info from './Info';

function MainContent() {
  return (
    <main className="mainContent">
      <div className="about">
        <h2 className="about__title">About Us</h2>
        <p className="about__para">
          urna, at ullamcorper at ipsum, vitae placerat. Ullamcorper proin
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed arcu
          venenatis vitae, scelerisque. Suspendisse at vulputate feugiat pretium
          enim tincidunt.
        </p>
      </div>
      <Info
        img={
          "https://www.clipartmax.com/png/full/100-1001847_boxing-glove-kickboxing-cartoon-punch-cartoon-boxing-gloves.png"
        }
        title="What We Provide"
        points={[
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore aut commodi porro qui, praesentium possimus.",
          "Lorem ipsum dolor sit amet",
          "Lorem ipsum dolor sit amet",
        ]}
      />
      <Info
        img={
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5oMdJde24l-3T6MNr5eaqBz6fBDAEUktcpg&usqp=CAU"
        }
        title="Our prices"
        points={[
          "Lorem ipsum dolor sit amet",
          "Lorem ipsum dolor sit amet",
        ]}
      />

      <a href="https://www.instagram.com/stfeyes/" className="mainContent__btn btns">
        <Icon icon="ant-design:instagram-filled" className="icon" height="38" />
        <h3>Check It Out</h3>
      </a>
    </main>
  );
}

export default MainContent