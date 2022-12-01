import React from "react";
import { BodyL, BodyXS, bodyL, H1, H3 } from "@salutejs/plasma-ui";
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

export default function CaruselSpec() {
  const items = Array(10)
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
          index={index}
          scrollSnapType="mandatory"
          detectActive
          detectThreshold={0.5}
          scrollAlign="center"
          scrollSnapAlign="start"
          style={{ paddingTop: "1.25rem", paddingBottom: "1.25rem" }}
          onIndexChange={(i) => setIndex(i)}
        >
          {items.map(({ title, subtitle }, i) => (
            <CarouselCol
              key={`item:${Math.random()}`}
              size={2}
              sizeXL={2}
              // scrollSnapAlign="start"
            >
              <div>
                <Card
                  //tabIndex={0}
                  style={{ height: "auto", width: "100%", margin: 0 }}
                  // focused={i === index}

                  tabIndex={0}
                  // className={"sn-section-item"}
                >
                  <CardBody>
                    <CardMedia
                      src="https://via.placeholder.com/1600x900"
                      placeholder="https://via.placeholder.com/1600x900"
                      ratio="16 / 9"
                    />
                  </CardBody>
                </Card>
                <BodyXS
                  //className="cghAIG"
                  tabindex={0}
                  style={{
                    textAlign: "center",
                    lineHeight: " 1rem",
                    overflow: "hidden",
                    overflowWrap: "break-word",
                    whiteSpace: "normal",
                    display: " -webkit-box",
                    "-webkit-line-clamp": "2",
                    "-webkit-box-orient": "vertical",
                    marginTop: ".375rem",
                  }}
                >
                  sadasd asda sd asd asd a asdsad asdsada asdsad sdasdasdasd
                  asdasdasd
                </BodyXS>
              </div>
            </CarouselCol>
          ))}
        </Carousel>
      </CarouselGridWrapper>
    </DeviceThemeProvider>
  );
}
