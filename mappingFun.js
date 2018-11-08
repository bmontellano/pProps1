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