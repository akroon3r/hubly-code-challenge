import React, { Component } from 'react';

import { Button, Card, Container, Divider, Grid, Header, Icon, Menu, Message, Segment } from 'semantic-ui-react'

class App extends Component {
  state = {
    dealerCards: [],
    playerCards: [],
    result: {
      header: "",
      message: ""
    }
  }

  dealCards = () => {
    this.setState({ dealerCards: [
        {
          "suit": "Spades",
          "card": "Ace"
        }, {
          "suit": "Spades",
          "card": "King"
        }, {
          "suit": "Spades",
          "card": "Queen"
        }, {
          "suit": "Spades",
          "card": "Jack"
        }, {
          "suit": "Spades",
          "card": "10"
        }
      ],
      playerCards: [
        {
          "suit": "Hearts",
          "card": "7"
        }, {
          "suit": "Clubs",
          "card": "9"
        }, {
          "suit": "Spades",
          "card": "2"
        }, {
          "suit": "Hearts",
          "card": "Queen"
        }, {
          "suit": "Diamonds",
          "card": "4"
        }
      ]
    })
  }

  shuffleCards = () => {
    return
  }

  determineWinner = () => {
    this.setState({
      result: {
        header: "Dealer wins",
        message: "With a royal flush against a Queen high"
      }
    })

    setTimeout(() => {
      this.setState({
        result: {
          header: "",
          message: ""
        }
      })
    }, 5000)
  }

  render() {
    return (
      <div>
        <Segment inverted vertical style={{ padding: '0em' }}>
          <Menu fixed inverted pointing secondary>
            <Container>
              <Menu.Item header>Hubly Code Challenge</Menu.Item>
              <Menu.Item as='a' position='right'>
                <a href='https://www.github.com/sjrumsby/hubly-code-challenge'>
                  <Button as='a' inverted >
                    <Icon name='github' />
                    Github
                  </Button>
                </a>
              </Menu.Item>
            </Container>
          </Menu>
        </Segment>
        <Container>
          { this.state.result.header !== "" ?
            <Message success
                     header={this.state.result.header}
                     content={this.state.result.message}
                     style={{marginTop: '1em'}} />
            : (null)
          }
          <Segment basic>
            <Grid stackable columns={3}>
              <Grid.Column width={5}>
                <Header as='h2'>Dealer</Header>
                <Card.Group itemsPerRow={1}>
                  {this.state.dealerCards.map((card, i) => {
                    return <Card>
                      <Card.Content>
                        <Card.Header>{card.card} of {card.suit}</Card.Header>
                      </Card.Content>
                    </Card>
                  })}
                </Card.Group>
              </Grid.Column>
              <Grid.Column width={5}>
                <Header as='h2'>Player</Header>
                <Card.Group itemsPerRow={1}>
                  {this.state.playerCards.map((card, i) => {
                    return <Card>
                      <Card.Content>
                        <Card.Header>{card.card} of {card.suit}</Card.Header>
                      </Card.Content>
                    </Card>
                  })}
                </Card.Group>
              </Grid.Column>
              <Grid.Column>
                <Header as='h2'>Actions</Header>
                <Button primary onClick={this.dealCards}>
                  <Icon name='shuffle' />
                  Deal
                </Button>
                <Divider hidden />
                <Button primary onClick={this.shuffleCards}>
                  <Icon name='shuffle' />
                  Shuffle
                </Button>
                <Divider hidden />
                <Button primary onClick={this.determineWinner}>
                  <Icon name='winner' />
                  Determine Winner
                </Button>
              </Grid.Column>
            </Grid>
          </Segment>
        </Container>
      </div>
    )
  }
}

export default App;
