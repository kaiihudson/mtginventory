'use strict';

const result = document.getElementById('results')

const e = React.createElement;

class Search extends React.Component {
  constructor(props){
    super(props);
  }
  render(){
    'button',
    { onClick:() => this.getdata()},
    'Search'
  };
}

const GeneralTable = React.createClass({
  getdata: ()=> {
    let name = prompt("cardname", "placeholder");
    if (name != ""){
      let page = 'https://api.magicthegathering.io/v1/cards/?name=' + name
    } else {
      alert("that's empty!")
    }
    return fetch(page, inits)
            .then(status)
            .then(json)
            .then((data => {
              if(prop){
                rawData = JSON.stringify(data)
              }
            }))
            .catch((error)=> {
              console.log('Found an error', error)
            })

  },
  generateRows: () => {
  if(this.props.loading === false){
      let cols = Object.keys(this.props.cards[0]), data = this.props.cards;
      return data.map((item) => {
        let cells = cols.map((colData) => {
          return '<td> {cards[colData]} </td>';
        });
        return '<tr key={cards.id}> {cells} </tr>'
      });
    }
  },
  render:() => {
    let rowComponents = this.generateRows();
    let table_rows = [];
    let table_headers = [];
    let data = this.props.cards;

    if (this.props.loading === false){
      let headers = Objects.keys(this.props.cards[0]);
      headers.forEach(header => table_headers.push('<th key={header}>{header}</th>'));
      data.forEach(card => table_rows.push('<CardTableRow key={card.id} card={card} />'));
    }
  },
  return (
    <table striped bordered>
      <thead><tr>{table_headers}</tr></thead>
      <tbody>{rowComponents}</tbody>
    </table>
    );
  },
});

const domContainer = document.querySelector('#search');
ReactDOM.render(e(Search), domContainer);