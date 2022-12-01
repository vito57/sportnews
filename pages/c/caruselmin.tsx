import React from "react";
import {
  DeviceThemeProvider,
  CarouselGridWrapper,
  Carousel,
  CarouselCol,
  Card,
  CardMedia,
  TextBoxSubTitle,
  CardBody,
  CardContent,
  CardParagraph1,
  Cell,
  CellIcon,
  TextBox,
  CellDisclosure,
} from "@salutejs/plasma-ui";

export default function CaruselMin() {
  const items = Array(20)
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
      <Cell
        tabIndex={0}
        // onClick={() => alert("click!")}
        // outlined
        contentLeft={<CellIcon as="img" src="https://via.placeholder.com/36" />}
        content={<TextBox title="Название категории" />}
        //contentRight={<CellDisclosure tabIndex={-1} />}
      />
      <CarouselGridWrapper>
        <Carousel
          axis="x"
          index={index}
          scrollSnapType="mandatory"
          detectActive
          detectThreshold={0.5}
          // scrollSnapAlign="start"
          style={{ paddingTop: "1.25rem", paddingBottom: "1.25rem" }}
          // onIndexChange={(i) => setIndex(i)}
        >
          {items.map(({ title, subtitle }, i) => (
            <CarouselCol
              key={`item:${Math.random()}`}
              size={4}
              sizeXL={4}
              // scrollSnapAlign="start"
            >
              <Card
                tabIndex={-1}
                style={{ height: "auto", width: "100%" }}
                // focused={i === index}
                className={"sn-section-item"}
              >
                <CardBody>
                  <CardContent>
                    <CardParagraph1 lines="3">
                      Лацио - Милан. Голы и лучшие моменты (видео). Чемпионат
                      Италии. Футбол
                    </CardParagraph1>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        marginTop: "12px",

                        padding: "4px 0",
                      }}
                    >
                      <img
                        src="https://via.placeholder.com/150"
                        height={16}
                        width={16}
                        style={{ borderRadius: "4px", marginRight: "6px" }}
                      />
                      <TextBoxSubTitle>ru.wikipedia.org</TextBoxSubTitle>
                    </div>
                  </CardContent>
                </CardBody>
              </Card>
            </CarouselCol>
          ))}
        </Carousel>
      </CarouselGridWrapper>
    </DeviceThemeProvider>
  );
}
