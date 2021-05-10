import React from 'react';
import { Card, Container, Row, Button, CardDeck } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export const Home = () => (
    <Container>
        <Row>
            <h1>Добро пожаловать в сервис отчетов ООО "НЛМК-Калуга"</h1>
            <CardDeck>
            <Card>
                <Card.Header>Журнал учета лома УПП</Card.Header>
                <Card.Body className="d-flex align-content-between flex-wrap">
                    <Card.Text>
                        Просмотреть данные о  поступление
                        и пеермещение металлошихты на участок
                        подготовки производства.
                    </Card.Text>                
                        <Link to="/scraplog"><Button variant="primary">Перейти</Button></Link>                
                </Card.Body>       
            </Card>

            <Card>
                <Card.Header>Отчет о работе УПП</Card.Header>
                <Card.Body className="d-flex align-content-between flex-wrap">
                    <Card.Text>
                        Просмотреть отчёт по работе участка
                        подготовки производства за период.
                    </Card.Text>
                        <Link to="/upp"><Button variant="primary">Перейти</Button></Link>                
                </Card.Body>       
            </Card>

            <Card>
                <Card.Header>Отчет о работе ДСП</Card.Header>
                <Card.Body className="d-flex align-content-between flex-wrap">
                    <Card.Text>
                        Просмотреть отчёт по работе участка
                        выплавки стали и внепечной обработки.
                    </Card.Text>
                        <Link to="/dsp"><Button variant="primary">Перейти</Button></Link>                
                </Card.Body>       
            </Card>
            </CardDeck>
        </Row>
    </Container>
)