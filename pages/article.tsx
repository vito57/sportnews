// export default function Article() {
//   return (

//   <div>Article sdas</div>;)
// }

import { Container, Header, Row, Col, Button } from "@salutejs/plasma-ui";
import {
  Cell,
  Image,
  CellIcon,
  TextBox,
  CellDisclosure,
} from "@salutejs/plasma-ui";
import { TextL, TextM, TextS, TextXS } from "@salutejs/plasma-ui";
import {
  IconDownload,
  IconPlay,
  IconArrowLeft,
  IconArrowRight,
} from "@salutejs/plasma-icons";
import { body1, text, background, gradient } from "@salutejs/plasma-tokens";
console.log(text);
const Article: NextPage = () => {
  return (
    <Container>
      <Row>
        <Col sizeL={5} sizeXL={8}>
          <div style={{ paddingLeft: 16, paddingRight: 16, paddingBottom: 32 }}>
            <Cell
              tabIndex={0}
              onClick={() => alert("click!")}
              outlined
              contentLeft={
                <CellIcon
                  as="img"
                  src="https://via.placeholder.com/36"
                  alt="avocado"
                />
              }
              content={
                <TextBox title="Новости спорта" subTitle="2 часа назад" />
              }
              // contentRight={<Button tabIndex={-1} size="s" text="Текст" />}
            />
            <h1>
              Лацио - Милан. Голы и лучшие моменты (видео). Чемпионат Италии.
              Футбол
            </h1>
            <p>
              Lorem Ipsum является стандартной "рыбой" для текстов на латинице с
              начала XVI века. В то время некий безымянный печатник создал
              большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum
              для распечатки образцов. Lorem Ipsum не только успешно пережил без
              заметных изменений пять веков, но и перешагнул в электронный
              дизайн. Его популяризации в новое время послужили публикация
              листов Letraset с образцами Lorem Ipsum в 60-х годах и, в более
              недавнее время, программы электронной вёрстки типа Aldus
              PageMaker, в шаблонах которых используется Lorem Ipsum.
            </p>
            <figure>
              <Image
                src="https://via.placeholder.com/160x90"
                width="100%"
                alt="Картинка для примера фоном"
              />
              <figcaption>
                <small>Подпись под картинкой</small>
              </figcaption>
            </figure>
            <h4>Ненумерованный список</h4>
            <ul>
              <li>
                Lorem Ipsum не только успешно пережил без заметных изменений
                пять веков
              </li>
              <li>B шаблонах которых используется Lorem Ipsum</li>
              <li>
                В то время некий безымянный печатник создал большую коллекцию
                размеров и форм шрифтов, используя Lorem Ipsum для распечатки
                образцов
              </li>
            </ul>
            <p>
              Lorem Ipsum является стандартной "рыбой" для текстов на латинице с
              начала XVI века. В то время некий безымянный печатник создал
              большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum
              для распечатки образцов.
            </p>
            <h4>Нумерованный список</h4>
            <ol>
              <li>
                Lorem Ipsum не только успешно пережил без заметных изменений
                пять веков
              </li>
              <li>B шаблонах которых используется Lorem Ipsum</li>
              <li>
                В то время некий безымянный печатник создал большую коллекцию
                размеров и форм шрифтов, используя Lorem Ipsum для распечатки
                образцов
              </li>
            </ol>

            <p>
              Lorem Ipsum является стандартной "рыбой" для текстов на латинице с
              начала XVI века. В то время некий безымянный печатник создал
              большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum
              для распечатки образцов.
            </p>
            <div>
              <small>
                РИА Новости. Фото: Иванов И.И <br /> 2 октября, 17:22
              </small>
            </div>

            <h6>Источники по теме</h6>
            {[
              "Большую коллекцию размеров и форм шрифтов",
              "В то время некий безымянный печатник создал",
              "Lorem Ipsum является стандартной",
            ].map((i, v) => (
              <Cell
                tabIndex={0}
                onClick={() => alert("click!")}
                outlined
                contentLeft={
                  <CellIcon
                    as="img"
                    src="https://via.placeholder.com/36"
                    alt="avocado"
                  />
                }
                content={<TextBox title={i} subTitle="Комсомольская правда" />}
                // contentRight={<Button tabIndex={-1} size="s" text="Текст" />}
              />
            ))}
          </div>
        </Col>
        <Col sizeL={3} sizeXL={4}>
          <div style={{ position: "sticky", top: 120 }}>
            <Image
              src="https://via.placeholder.com/160x90"
              width="100%"
              alt="Картинка для примера фоном"
            />
            <div
              style={{
                width: "100%",
                marginTop: "16px",
                display: "flex",
                gap: 8,
              }}
            >
              <Button text=" " contentLeft={<IconArrowLeft />} stretch />
              <Button
                text=" "
                view="primary"
                contentLeft={<IconPlay />}
                stretch
              />
              <Button text=" " contentLeft={<IconArrowRight />} stretch />
              {/* <Button size="m" stretch contentLeft={<IconDownload />} />
          <Button size="m" stretch contentLeft={<IconDownload />} /> */}
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Article;
