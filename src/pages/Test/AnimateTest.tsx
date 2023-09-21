import { AnimationOnScroll } from "react-animation-on-scroll";
import React, { PropsWithChildren } from "react";
import "animate.css/animate.min.css";
import { PageWrapper } from "../../components/Containers/PageWrapper";

export const AnimateTest: React.FC<PropsWithChildren> = () => {
  const styleBox = {
    width: "100%",
    height: "500px",
    border: "solid 1px #ff0000",
  };

  return (
    <PageWrapper>
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div style={{ ...styleBox, backgroundColor: "#f1ecec" }}>
          <AnimationOnScroll animateIn="animate__fadeInUp" animateOnce>
            <h1>save to reload.</h1>
          </AnimationOnScroll>
        </div>
        <div style={{ ...styleBox, backgroundColor: "#9ad26c" }}>
          <AnimationOnScroll
            animateIn="animate__fadeInUp"
            delay={500}
            animateOnce
          >
            <p>
              <code>src/App.tsx</code> and save to reload.
            </p>
          </AnimationOnScroll>
        </div>
        <div style={{ ...styleBox, backgroundColor: "#ffff00" }}>
          <AnimationOnScroll
            animateIn="animate__fadeInUp"
            animateOnce
            delay={300}
          >
            <p>
              Edit <code>src/App.tsx</code> and save to reload.
            </p>
          </AnimationOnScroll>
          <AnimationOnScroll
            animateIn="animate__fadeInUp"
            animateOnce
            delay={500}
          >
            <p>
              Edit <code>src/App.tsx</code> and save to reload.
            </p>
          </AnimationOnScroll>
          <AnimationOnScroll
            animateIn="animate__fadeInUp"
            animateOnce
            delay={700}
          >
            <p>
              Edit <code>src/App.tsx</code> and save to reload.
            </p>
          </AnimationOnScroll>
        </div>
        <div style={{ ...styleBox, backgroundColor: "#b167d7" }}>
          <AnimationOnScroll
            animateIn="animate__fadeInUp"
            animateOnce
            delay={500}
          >
            <p>
              Edit <code>src/App.tsx</code> and save to reload.
            </p>
          </AnimationOnScroll>
        </div>
        <div style={{ ...styleBox, backgroundColor: "#7774c7" }}>
          <AnimationOnScroll
            animateIn="animate__fadeInUp"
            animateOnce
            delay={500}
          >
            <p>
              Edit <code>src/App.tsx</code> and save to reload.
            </p>
          </AnimationOnScroll>
        </div>
      </div>
    </PageWrapper>
  );
};
