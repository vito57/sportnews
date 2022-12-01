import type { AppProps } from "next/app";
// import { spatnavInstance } from "@salutejs/spatial";
import { DeviceThemeProvider, SSRProvider } from "@salutejs/plasma-ui";
import { GlobalStyle } from "./GlobalStyle";
import "../styles/s.css";
import { Container, Header, Button } from "@salutejs/plasma-ui";
// Called once somewhere in the root of the app

function MyApp({ Component, pageProps }: AppProps) {
  // spatnavInstance.init();
  return (
    <DeviceThemeProvider responsiveTypo>
      <SSRProvider>
        <Container>
          <Header
            back={true}
            logo="https://via.placeholder.com/36"
            logoAlt="Logo"
            style={{ marginBottom: "20px" }}
            gradientColor="black"
            title="Салют, новости!"
            //subtitle="Subtitle text"
            onBackClick={() => console.log("Back click!")}
          >
            <Button view="clear"> Настроить</Button>
          </Header>
        </Container>
        <Component {...pageProps} />
        <GlobalStyle />
      </SSRProvider>
    </DeviceThemeProvider>
  );
}

export default MyApp;
