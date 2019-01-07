import * as React from "react";
import * as ReactDOM from "react-dom";
import Button from "../components/Button";
import * as Input from "../components/Input";
import Heading from "../components/Heading";
import Modal from "../components/Modal";
import Area, { Padding } from "../components/Area";
import * as Grid from "../components/Grid";
import { ThemeProvider } from "../components/theme";

const Example = () => (
  <ThemeProvider
    theme={{
      accent: "#F49500",
      accentInverted: "#FFF",
      primaryColor: "#1B2638",
      primaryColorInverted: "#FFF",
      spacing: 2,
      fontFamily: "'Sarabun', sans-serif"
    }}
  >
    <div>
      <Grid.Container width={3}>
        <Grid.Item>
          <p>one</p>
        </Grid.Item>
        <Grid.Item>
          <p>two</p>
        </Grid.Item>
        <Grid.Item>
          <p>three</p>
        </Grid.Item>
        <Grid.Item>
          <p>four</p>
        </Grid.Item>
        <Grid.Item>
          <p>one</p>
        </Grid.Item>
        <Grid.Item>
          <p>two</p>
        </Grid.Item>
        <Grid.Item>
          <p>three</p>
        </Grid.Item>
        <Grid.Item>
          <p>four</p>
        </Grid.Item>
        <Grid.Item>
          <p>one</p>
        </Grid.Item>
        <Grid.Item>
          <p>two</p>
        </Grid.Item>
        <Grid.Item>
          <p>three</p>
        </Grid.Item>
        <Grid.Item>
          <p>four</p>
        </Grid.Item>
      </Grid.Container>
      <Modal
        open={false}
        onWrapperClicked={() => {
          console.log("modal");
        }}
      >
        <Button
          onClick={async () => {
            console.log("wassup");
            return true;
          }}
        >
          test event propogration
        </Button>
        <p>drawer content</p>
      </Modal>
      <section>
        <h1>Headings</h1>
        <Heading as="h1">Heading one</Heading>
        <Heading as="h2">Heading two</Heading>
        <Heading as="h3">Heading three</Heading>
        <Heading as="h4">Heading four</Heading>
      </section>
      <section>
        <h1>Button</h1>
        <Button>some button</Button>
      </section>
      <section style={{ width: "500px" }}>
        <h1>Input</h1>
        <Input.Input type="text" name="example-input">
          some value
        </Input.Input>
        <div style={{ background: "#1B2638", padding: "20px", margin: "10px" }}>
          <Input.Input onPrimary={true} type="text" name="example-input">
            some value
          </Input.Input>
        </div>
      </section>
      <section>
        <h1>Area</h1>
        <Area>a normal area</Area>
        <Area hero>a hero area</Area>
        <Area>
          <Padding multiplier={3}>3 Padding inside an area</Padding>
        </Area>
        <Area hero>
          <Padding multiplier={5}>5 Padding inside a hero</Padding>
        </Area>
      </section>
    </div>
  </ThemeProvider>
);

ReactDOM.render(<Example />, document.getElementById("app"));
