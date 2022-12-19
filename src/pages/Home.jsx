import Button from "../components/Button";

const Home = () => {
  return (
    <>
      Size
      <div>
        <Button size="small">small</Button>
        <Button size="medium">medium</Button>
        <Button size="large">Large</Button>
      </div>
      Type
      <div>
        <Button type="default">default</Button>
        <Button type="outline">outline</Button>
        <Button type="text">text</Button>
      </div>
      <br />
      disabled
      <div>
        <Button type="default" disabled={true}>
          default
        </Button>
        <Button type="outline" disabled={true}>
          outline
        </Button>
        <Button type="text" disabled={true}>
          text
        </Button>
      </div>
      <br />
      Color
      <div>
        <Button color="primary">primary</Button>
        <Button color="secondary">secondary</Button>
        <Button color="warning">warning</Button>
        <Button color="danger">danger</Button>
        <Button color="info">info</Button>
        <Button color="success">success</Button>
      </div>
      <div>
        <Button type="outline" color="primary">
          primary
        </Button>
        <Button type="outline" color="secondary">
          secondary
        </Button>
        <Button type="outline" color="warning">
          warning
        </Button>
        <Button type="outline" color="danger">
          danger
        </Button>
        <Button type="outline" color="info">
          info
        </Button>
        <Button type="outline" color="success">
          success
        </Button>
      </div>
      <div>
        <Button type="text" color="primary">
          primary
        </Button>
        <Button type="text" color="secondary">
          secondary
        </Button>
        <Button type="text" color="warning">
          warning
        </Button>
        <Button type="text" color="danger">
          danger
        </Button>
        <Button type="text" color="info">
          info
        </Button>
        <Button type="text" color="success">
          success
        </Button>
      </div>
      <br />
      Shadow
      <div>
        <Button shadow={true}>Shadow True</Button>
        <Button shadow={false}>Shadow False</Button>
      </div>
      <br />
      Icons
      <div>
        <Button startIcon="check">lorem</Button>
        <Button endIcon="check">lorem</Button>
        <Button startIcon="check" endIcon="check">
          lorems
        </Button>
      </div>
      <div>Made by ahmad fathallah (FatahChan)</div>
    </>
  );
};

export default Home;
