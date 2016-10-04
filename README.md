# babel-plugin-react-extends-to-stateless

**Change Class into Stateless Function**

## Installation

```sh
  npm install babel-plugin-react-extends-to-stateless
```

## Example

Input:

```javascript
class Dump extends Component {
  render() {
    <div>
      { this.props.title }
      <div>
      	<button onClick={ this.props.onClick }></button>
        { this.props.children }
      </div>
      <MyComponent
    	onHandleSomthing={ this.props.handleSomthing }
    	onMouseOver={ this.props.mouseOver }
    	onMouseLeave={ this.props.mouseLeave } />
    </div>
  }
}
```

OutPut:

```javascript
const Dump = props => {
  return <div>
    {props.title}
    <div>
      <button onClick={props.onClick}></button>
      {props.children}
    </div>
    <MyComponent onHandleSomthing={props.handleSomthing} onMouseOver={props.mouseOver} onMouseLeave={props.mouseLeave} />
  </div>;
};
```

## Usage

### Via `.babelrc`

**.babelrc**

```js
{
  "plugins": ['react-extends-to-stateless']
}
```

### Via Node API

```javascript
require('babel-core').transform('code', {
  plugins: ['react-extends-to-stateless']
})
```
