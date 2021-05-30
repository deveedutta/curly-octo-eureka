import React, { useState } from "react";
import {
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  Card,
  Button,
  CardTitle,
  CardText,
  Row,
  Col,
  Spinner,
} from "reactstrap";
import classnames from "classnames";
import "./Tabs.css";

export const TabViewOne = (props) => {
  const { content, nav, loading } = props;
  const [activeTab, setActiveTab] = useState("1");

  const toggle = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  return (
    <div>
      <React.Fragment>
        <Nav tabs className="TabNav">
          {nav.map((item, index) => (
            <NavItem key={`${index}-${item.color}`}>
              <NavLink
                className={classnames({ active: activeTab === index })}
                style={{
                  borderBottomColor: item.color,
                }}
                onClick={() => {
                  toggle(index);
                }}
              >
                <span
                  className="top-title"
                  style={{
                    color: item.color,
                  }}
                >
                  {item?.title || `00${index + 1}`}
                </span>
                <br />
                {loading ? (
                  <Spinner className="d-flex align-self-center" style={{}} />
                ) : (
                  <React.Fragment>
                    <span
                      className="sub-title"
                      style={{
                        color: item.color,
                      }}
                    >
                      {+isNaN(parseFloat(item?.subTitle))
                        ? item?.subTitle ?? "text"
                        : parseFloat(item?.subTitle).toFixed(2)}
                    </span>
                  </React.Fragment>
                )}
              </NavLink>
            </NavItem>
          ))}

          <NavItem>
            <NavLink
              className={classnames({ active: activeTab === "2" })}
              onClick={() => {
                toggle("2");
              }}
            >
              {/* <span>{" ... "} </span> */}
              <span
                className="top-title"
                style={
                  {
                    // color: item.color,
                  }
                }
              >
                More Tabs
              </span>
              <br />
              <span
                className="sub-title"
                style={
                  {
                    // color: item.color,
                  }
                }
              >
                ..
              </span>
            </NavLink>
          </NavItem>
        </Nav>
        <TabContent
          activeTab={activeTab}
          style={{
            minHeight: "101vh",
          }}
        >
          {content.map((item, index) => (
            <TabPane tabId={index} key={index} className="TabPane">
              <Row>
                <Col sm="12">{/* <h4>Tab {index + 1} Contents</h4> */}</Col>
              </Row>
              <Row>{item.el}</Row>
            </TabPane>
          ))}

          <TabPane tabId="2">
            <Row>
              <Col sm="6">
                <Card body>
                  <CardTitle>Special Title Treatment</CardTitle>
                  <CardText>
                    With supporting text below as a natural lead-in to
                    additional content.
                  </CardText>
                  <Button>Go somewhere</Button>
                </Card>
              </Col>
              <Col sm="6">
                <Card body>
                  <CardTitle>Special Title Treatment</CardTitle>
                  <CardText>
                    With supporting text below as a natural lead-in to
                    additional content.
                  </CardText>
                  <Button>Go somewhere</Button>
                </Card>
              </Col>
            </Row>
          </TabPane>
        </TabContent>
      </React.Fragment>
    </div>
  );
};

export default TabViewOne;
