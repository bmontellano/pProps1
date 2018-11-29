//Mapping practice
var nums = [4,6,8]
var numsDividedBy3 = nums.map( function(num){
    return num / 3;
});
console.log(numsDividedBy3);

//more practice
class Friends extends React.Component {
    render() {
        var name = 'Brian Montellano';
        var friends = ['Phil','Jim','Alex'];
        return (
            <div>
                <h3>Name: {name}</h3>
                <Showlist names={friends} />
            </div>
        )
    }
}

//child of the friends class
class FList extends React.Component {
    render() {
        return ( 
        <div>
            <h4> Friends </h4>
            <ul>
                {this.props.names.map( function(f){
                    return <li><strong>{f}</strong></li>
                })}
            </ul>
        </div>
            )
    }
}

//Demonstration of filter
var nums = [1,20,300,6000]
var numsDivisibleBy3 = nums.filter(function(num){
    return num % 3 === 0;
})
console.log(numsDivisibleBy3);




//OLD line in .bash_profile
//export PS1="\u@\h \[\033[32m\]\w - \$(parse_git_branch)\[\033[00m\] $ "

//OLD line in Terminal Preferences
//export PS1="\W \$"; clear;

//MORE PRACTICE, this is Tylers
class Users extends React.Component {
    render() {
      return (
        <ul>
          {this.props.list.map( function(name){
            return <li><strong>{name.toUpperCase()}</strong></li>
          })}
        </ul>
      )
    }
  }
  
  ReactDOM.render(
    <Users list={['Tyler', 'Mikenzi', 'Ryan', 'Michael']} />,
    document.getElementById('app')
  );

  //Finished mapping project
  class Users extends React.Component {
    render() {
      return (
        <div>
          <h1>Friends</h1>
          <ul>
            {this.props.list.map( function(friend){
                if(friend.friend)return <li> {friend.name} </li> 
            })}
          </ul>
          
          <hr />
          
          <h1> Non Friends </h1>
          <ul>
              {this.props.list.map( function(f){
              if(!f.friend)return <li>{f.name}</li>
            })}
          </ul>        
        </div>
      )
    }
  }
  
  ReactDOM.render(
    <Users list={[
      { name: 'Tyler', friend: true },
      { name: 'Ryan', friend: true },
      { name: 'Michael', friend: false },
      { name: 'Mikenzi', friend: false },
      { name: 'Jessica', friend: true },
      { name: 'Dan', friend: false } ]} 
    />,
    document.getElementById('app')
  );