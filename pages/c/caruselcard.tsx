import {
  Carousel,
  CarouselCol,
  Card,
  CardMedia,
  CardBody,
  CardContent,
  CardParagraph1,
  CardParagraph2,
  TextBoxSubTitle,
} from "@salutejs/plasma-ui";
// import Link from "next/link";
// import Image from "next/image";
// import { BodyL, BodyXS, bodyL, H1, H3 } from "@salutejs/plasma-ui";
export default function CaruselCard(props) {
  return (
    <Card
      tabIndex={0}
      // className={props.cls}
      // onClick={function () {
      //   window.location.assign("https://www.w3schools.com");
      // }}
      // outlined
      scaleOnFocus
      style={{ height: "auto", width: "100%" }}
      // focused={props.i === props.index}
    >
      <CardBody>
        {/* <Link href="/article"> */}
        <CardMedia
          src={props.src}
          placeholder="https://source.unsplash.com/random"
          ratio="16 / 9"
        />
        <CardContent>
          <CardParagraph1 lines="3">
            Лацио - Милан. Голы и лучшие моменты (видео). Чемпионат Италии.
            Футбол1 sda sd asd as da ds ads asdasd asdasdasd asdasdasd
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
        {/* </Link> */}
      </CardBody>
    </Card>
    //{" "}
  );
}
