import React from "react";
import { useEffect } from "react";

import CaruselCard from "./caruselcard.tsx";

import {
  DeviceThemeProvider,
  CarouselGridWrapper,
  Carousel,
  CarouselCol,
  Card,
  CardMedia,
  CardBody,
  CardContent,
  CardParagraph1,
} from "@salutejs/plasma-ui";

export default function Carusel() {
  const items = Array(25)
    .fill({
      title: "Заголовок",
      subtitle:
        "Описание уравнение времени, сублимиpуя с повеpхности ядpа кометы, вращает реликтовый ледник",
    })
    .map(({ title, subtitle }, i) => ({
      title: `${title} ${i}`,
      subtitle: `${subtitle} ${i}`,
    }));

  const [index, setIndex] = React.useState(0);

  return (
    <DeviceThemeProvider>
      <CarouselGridWrapper>
        <Carousel
          axis="x"
          //  autoscroll
          animatedScrollByIndex
          index={index}
          scrollSnapType="mandatory"
          detectActive
          scrollAlign="center"
          detectThreshold={0.5}
          style={{ paddingTop: "2rem", paddingBottom: "2rem" }}
          onIndexChange={(i) => setIndex(i)}
        >
          {items.map(({ title, subtitle }, i) => (
            <CarouselCol
              key={`item:${Math.random()}`}
              size={4}
              sizeXL={4}
              // type={"calc"}
            >
              <CaruselCard
                // index={index}
                // i={i}
                // cls="sn-section-item"
                // tabIndex={-1}
                src="https://via.placeholder.com/1600x900"
              />
            </CarouselCol>
          ))}
        </Carousel>
      </CarouselGridWrapper>
    </DeviceThemeProvider>
  );
}
