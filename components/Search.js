Search = React.createClass({
    getInitialState() {
      return{
          searchingText:''
      };
    },
    handleChange: function (e) {

    },
    render: function () {
        var styles = {
            fontSize: '1.5em',
            width: '90%',
            maxWidth: '350px'
        };
        return <input
            type = "text"
            onChange = {this.handleChange}
            placeholder = "name of your gif"
            style = {styles}
            value = {this.state.searchTerm}
        />

    }
});