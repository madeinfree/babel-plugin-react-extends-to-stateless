# babel-plugin-react-extends-to-stateless

**Change Class into Stateless Function**

## Options
- functionShadowed: boolean
<br />default: false (when true then use the arrowFunctionShadowed commends for **es5**)

## Installation

```sh
  npm install babel-plugin-react-extends-to-stateless
```

## Example

Input (without functionShadowed options):

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

OutPut (without functionShadowed options):

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

Input (with functionShadowed options):

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

OutPut (with functionShadowed options):

```javascript
const Dump = function (props) {
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
// without options
{
  "plugins": ['react-extends-to-stateless']
}
// with options
{
  "plugins": ['react-extends-to-stateless', { "functionShadowed": false }]
}
```

### Via Node API

```javascript
require('babel-core').transform('code', {
  plugins: ['react-extends-to-stateless']
})
```
