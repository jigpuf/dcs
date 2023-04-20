import React from 'react';

class Attributes extends React.Component {
  render () {
    const Items = [
      {tag:'<html>', subTags:'<head>, <body>', attribute:'lang', property:'', js:'',   slug: 'html'},
      {tag:'<head>', subTags:'<link>, <script>, <meta>, <style>, <title>', attribute:'', property:'', js:'',   slug: 'head'},
      {tag:'<body>', subTags:'<nav>, <aside>, <header>, <footer>, <article>, <section>, <div>', attribute:'', property:'', js:'',   slug: 'body'},
      {tag:'<link>', subTags:'', attribute:'', property:'', js:'',   slug: 'link'},
      {tag:'<script>', subTags:'', attribute:'type,src', property:'', js:'',   slug: 'script'},
      {tag:'<meta>', subTags:'', attribute:'charset', property:'', js:'',   slug: 'meta'},
      {tag:'<style>', subTags:'', attribute:'type', property:'', js:'',   slug: 'style'},
      {tag:'<title>', subTags:'', attribute:'rel, type, href, media', property:'', js:'',   slug: 'title'},
      {tag:'<nav>', subTags:'', attribute:'', property:'', js:'',   slug: 'nav'},
      {tag:'<aside>', subTags:'', attribute:'', property:'', js:'',   slug: 'aside'},
      {tag:'<header>', subTags:'', attribute:'', property:'', js:'',   slug: 'header'},
      {tag:'<footer>', subTags:'', attribute:'', property:'', js:'',   slug: 'footer'},
      {tag:'<article>', subTags:'', attribute:'', property:'', js:'',   slug: 'article'},
      {tag:'<section>', subTags:'', attribute:'', property:'', js:'',   slug: 'section'},
      {tag:'<div>', subTags:'', attribute:'', property:'', js:'',   slug: 'div'},
      {tag:'', subTags:'', attribute:'', property:'', js:'',   slug: ''},
      ]
    const Globals = [
      {attribute:'id', slug:'id'},
      {tag:'', subTags:'', attribute:'', property:'', js:'',   slug: ''},
      {tag:'', subTags:'', attribute:'', property:'', js:'',   slug: ''},
      ]
    const renderItems = Items.map(item => {
      return (
        <tr key={item.slug}>
          <td>{item.tag}</td>
          <td>{item.subTags}</td>
          <td>{item.attribute}</td>
          <td>{item.property}</td>
          <td>{item.js}</td>
        </tr>
      )
    })
    return (
      <div>
        Should have tag specific attributes. Sub-tag are common tags used under
        the tag. Properties are things css can adjust on the tag other than its
        specific properties, functions deal with js control of the tag.  Global
        attributes are things all tags have. Global properties are things all
        box model elements can have.
        <h3>Tag Use</h3>
        <table>
          <tr>
            <th>Tag</th>
            <th>Sub Tags</th>
            <th>Attribute</th>
            <th>Property</th>
            <th>JS Function</th>
          </tr>
        {renderItems}
        </table>
        <h2>Attributes</h2>
        <a href='https://www.w3schools.com/tags/ref_attributes.asp' target='_blank'
        >Ref sheet</a><br />
          <table>
            <tr>
              <th>Tag</th>
              <th>Specific Attribute</th>
              <th> Event Attributes</th>
            </tr>
            <tr>
              <td>body, nav, aside, footer, article, div, span, p</td>
              <td>background-color, margin, border, padding, font-family, float,
              width, color, background-image, background-repeat,
              background-position, clear, position, display, verticle-align</td>
              <td></td>
            </tr>
            <tr>
              <td>h1 to h6, em, strong, bold, sub, sup, small, mark, del,
              ins, q, cite, bdo, blockquote, pre</td>
              <td>color, font-family, font-style, font-weight, line-height,
              font-size, text-align, letter-spacing, text-decoration</td>
              <td></td>
            </tr>
            <tr>
              <td>a</td>
              <td>href, download, target, type, text-decoration, title</td>
              <td> onclick, onhover, link, hover, color, background </td>
            </tr>
            <tr>
              <td>img</td>
              <td>src, width, height, alt, z-index</td>
              <td></td>
            </tr>
            <tr>
              <td>audio controls</td>
              <td>src, controls, type</td>
              <td></td>
            </tr>
            <tr>
              <td>video</td>
              <td>controls, poster, autoplay, width, height, src, source</td>
              <td></td>
            </tr>
            <tr>
              <td>table</td>
              <td>caption-side, border-collapse,margin, padding, border</td>
              <td></td>
            </tr>
            <tr>
              <td>tr, th, td,</td>
              <td>background-color, rowspan</td>
              <td></td>
            </tr>
            <tr>
              <td>ol, ul, li</td>
              <td>list-style, list-style-type, list-style-image</td>
              <td></td>
            </tr>
            <tr>
              <td>br</td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>hr</td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>iframe</td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>input</td>
              <td>type, name, value, min, max, step, placeholder, required, checked</td>
              <td></td>
            </tr>
            <tr>
              <td>form</td>
              <td>action, method,</td>
              <td></td>
            </tr>
            <tr>
              <td>button</td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>textarea</td>
              <td>name, rows, cols</td>
              <td></td>
            </tr>
            <tr>
              <td>Select</td>
              <td>multiple</td>
              <td></td>
            </tr>
          </table>
          <h3>Global Attributes</h3>
            <ul>
              <li>id=""</li>
              <li>class=""</li>
              <li>background-color, margin, border-width, border-style,
              border-color, padding, font-family,float, width, color, height</li>
            </ul>
      </div>
    );
  }
}

export default Attributes;
