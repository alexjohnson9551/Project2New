import { Button, Card, Col, Form, InputGroup, Row } from 'react-bootstrap'
import './TableEntryStyle.css'
import Location from '../../models/location'
import { useAppDispatch, useAppSelector } from '../../hooks';

const TableEntry = ({loc, deleteLocation, updateTitle, qrHandler}: {
  loc: Location
  deleteLocation: any
  updateTitle: any
  qrHandler:(qrImage: string) => void
}) => {

  return (
    <div>
      <Card border="dark" bg="light" className="entrycard">
        <Card.Header>
          <InputGroup>
            <Form.Control
              type="text"
              placeholder={"Set Custom Title"}
              value={"" + loc.title}
              onChange={(e) => updateTitle(loc, e.target.value, false)}
            ></Form.Control>
            <Button
              variant="outline-primary"
              className="entrybutton"
              onClick={() => updateTitle(loc, loc.title, true)}
            >
              Save
            </Button>
          </InputGroup>
        </Card.Header>
        <Card.Body>
          <Form>
            <Row className="align-items-center">
              <Col xs={8}>
                <Form.Control
                  as="textarea"
                  rows={2}
                  placeholder={loc.address}
                  readOnly
                ></Form.Control>
              </Col>
              <Col>
                <Row>
                  <Button 
                  variant="primary" 
                  size="sm" 
                  className="entrybutton"
                  onClick={() => {navigator.clipboard.writeText("http://localhost:3000/View/"+loc.id)}}
                  > Copy Link
                  </Button>
                </Row>
                <Row>
                  <Button
                    variant="outline-danger"
                    size="sm"
                    className="entrybutton"
                    onClick={() => deleteLocation(loc)}
                  >Delete
                  </Button>
                  <Button
                  variant="outline-entry"
                  size="sm"
                  className="entrybutton"
                  onClick={() => qrHandler(""+loc.id)}
                  >QR Code
                  </Button>
                </Row>
              </Col>
            </Row>
          </Form>
        </Card.Body>
      </Card>
    </div>
  )
}

export default TableEntry
