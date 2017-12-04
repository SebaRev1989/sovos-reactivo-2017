import React from 'react';
import Paper from 'material-ui/Paper';
import '../../app.scss';
import {Card, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';

class AboutPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      expanded: false,
    };
  }

  handleExpandChange = (expanded) => {
    this.setState({expanded: expanded});
  };

  render() {
    return (
      <div>
        <Paper zDepth={2} className='paperStyle' >
          <Card expanded={this.state.expanded} onExpandChange={this.handleExpandChange}>
            <CardHeader
              title="Sebasti&aacute;n Reverso"
              subtitle="Sovos Reactivo"
              avatar="./profile.jpg"
              actAsExpander={true}
              showExpandableButton={true}
            />
            <CardMedia
              expandable={true}
              overlay={<CardTitle title="Sebasti&aacute;n Reverso" subtitle="Sovos Reactivo" />}
            >
              <img src="./profile.jpg" alt="" />
            </CardMedia>
            <CardTitle title="Tuculegio" subtitle="Proyecto Reactivo" expandable={true} />
            <CardText expandable={true}>
              Este es el proyecto Tuculegio desarrollado por los Reactivos 2017 de Sovos!
            </CardText>
          </Card>
        </Paper>
      </div>
    );
  }
}

export default AboutPage;
