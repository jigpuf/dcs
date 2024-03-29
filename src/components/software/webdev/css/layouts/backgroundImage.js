import React from "react";

const BackgroundImage = () => {
  const effects = [
    {
      effect: "Repeat",
      code: [
        "div{height: 400px;",
        "width:400px;",
        "background-size:50px;",
        "background-image: url('imageUrl');}",
      ],
      notes: ["Just keeps repeating line after line"],
      background: (
        <div
          style={{
            height: "400px",
            width: "400px",
            backgroundSize: "50px",
            backgroundImage: `url(https://static.vecteezy.com/system/resources/thumbnails/016/432/575/small/paintball-icon-design-free-vector.jpg)`,
          }}
        ></div>
      ),
    },
    {
      effect: "No-repeat",
      code: [
        "div{height: 400px;",
        "width:400px;",
        "background-repeat: no-repeat",
        "background-size:50px;",
        "background-image: url('imageUrl');}",
      ],
      notes: ["Doesn't repeat"],
      background: (
        <div
          style={{
            height: "400px",
            width: "400px",
            backgroundSize: "50px",
            backgroundRepeat: "no-repeat",
            backgroundImage: `url(https://static.vecteezy.com/system/resources/thumbnails/016/432/575/small/paintball-icon-design-free-vector.jpg)`,
          }}
        ></div>
      ),
    },
    {
      effect: "Repeat X",
      code: [
        "div{height: 400px;",
        "width:400px;",
        "background-repeat: repeat-x;",
        "background-size:50px;",
        "background-image: url('imageUrl');}",
      ],
      notes: ["only repeats on x axis"],
      background: (
        <div
          style={{
            height: "400px",
            width: "400px",
            backgroundSize: "50px",
            backgroundRepeat: "repeat-x",
            backgroundImage: `url(https://static.vecteezy.com/system/resources/thumbnails/016/432/575/small/paintball-icon-design-free-vector.jpg)`,
          }}
        ></div>
      ),
    },
    {
      effect: "Repeat Y",
      code: [
        "div{height: 400px;",
        "width:400px;",
        "background-repeat: repeat-y;",
        "background-size:50px;",
        "background-image: url('imageUrl');",
        "background-position: top right;}",
      ],
      notes: ["Repeats on Y axisnotice background-position is top right"],
      background: (
        <div
          style={{
            height: "400px",
            width: "400px",
            backgroundSize: "50px",
            backgroundRepeat: "repeat-y",
            backgroundImage: `url(https://static.vecteezy.com/system/resources/thumbnails/016/432/575/small/paintball-icon-design-free-vector.jpg)`,
            backgroundPosition: "top right",
          }}
        ></div>
      ),
    },
    {
      effect: "Background-Size",
      code: [
        "div{height: 400px;",
        "width:400px;",
        "background-repeat: repeat-y;",
        "background-size:50px;",
        "background-image: url('imageUrl');",
        "background-position: top right;}",
      ],
      notes: ["Repeats on Y axisnotice background-position is top right"],
      background: (
        <div
          style={{
            height: "400px",
            width: "400px",
            backgroundSize: "50px",
            backgroundRepeat: "repeat-y",
            backgroundImage: `url(https://static.vecteezy.com/system/resources/thumbnails/016/432/575/small/paintball-icon-design-free-vector.jpg)`,
            backgroundPosition: "top right",
          }}
        ></div>
      ),
    },
  ];
  const renderEffects = effects.map((item) => {
    return (
      <tr>
        <td>{item.effect}</td>
        <td>{item.code.join("\n")}</td>
        <td>{item.notes}</td>
        <td>{item.background}</td>
      </tr>
    );
  });
  return (
    <div>
      <h1>Background Image</h1>
      <table>
        <tr>
          <td>Effect</td>
          <td>Code</td>
          <td>Notes</td>
          <td>Background</td>
        </tr>
        {renderEffects}
      </table>
      <h2>Background-Size</h2>
      <p>
        The background-size attribute controls the size of a background image
        applied to an element. It determines how the background image should be
        displayed and scaled to fit within the element's content box. When you
        set the background-size property, the browser uses that value to
        calculate how to display the background image.
      </p>
      <ol>
        <li>
          background-size: auto; the background image will be displayed at its
          original size. It will not be scaled or modified in any way.
        </li>
        <li>
          background-size: cover; the background image is scaled proportionally
          to cover the entire background area of the element. The image might be
          cropped if necessary to ensure that the entire background area is
          filled. The aspect ratio of the image is maintained.
        </li>
        <li>
          background-size: contain; the background image is scaled
          proportionally to fit within the background area of the element. The
          entire image will be visible, but there might be empty spaces within
          the background area if the aspect ratio of the image and the element
          differ.
        </li>
        <li>
          specific length values, such as pixels (px) or percentages (%), to
          define the width and height of the background image. For example,
          background-size: 200px 150px; sets the width of the background image
          to 200 pixels and the height to 150 pixels.
        </li>
        <li>
          {" "}
          You can combine the cover or contain keywords with length values to
          achieve more precise control over the background size. For example,
          background-size: cover 100px; will scale the background image to cover
          the background area while ensuring its height is 100 pixels.
        </li>
      </ol>

      <h2>Background-position</h2>
      <ol>
        <li>
          Length Values:You can use specific length values, such as pixels (px)
          or percentages (%), to define the horizontal and vertical position of
          the background image. For example, background-position: 50% 25%; will
          position the background image to be horizontally centered and
          vertically positioned 25% from the top.
        </li>
        <li>
          Keywords:CSS provides a set of keywords that you can use to position
          the background image. These keywords include: top, bottom, left,
          right, and center. For example, background-position: top left; will
          position the background image at the top left corner of the element.
        </li>
        <li>
          Multiple Values:You can specify multiple values to define both the
          horizontal and vertical positions of the background image. The values
          are provided in pairs, where the first value represents the horizontal
          position and the second value represents the vertical position. For
          example, background-position: top 20px right 10%; will position the
          background image at the top 20 pixels from the top and 10% from the
          right.
        </li>
      </ol>

      <h2>Background Attachment</h2>
      <p>
        The background-attachment property in CSS is used to control how a
        background image behaves when scrolling the content of an element. It
        specifies whether the background image scrolls with the content, remains
        fixed in place, or scrolls within its containing element.
      </p>
      <p>The background-attachment property can take the following values:</p>
      <ol>
        <li>
          scroll: This is the default value. The background image scrolls along
          with the content of the element as the user scrolls the page. It moves
          with the content, so its position is relative to the element's content
          box.
        </li>
        <li>
          fixed: The background image remains fixed in place regardless of
          scrolling. It stays positioned relative to the viewport, meaning it
          doesn't move when the user scrolls the page. This creates a "fixed"
          background effect, where the content appears to scroll over the top of
          the fixed background image.
        </li>
        <li>
          local: This value is not widely supported by browsers. When used, it
          causes the background image to scroll with the element's contents,
          similar to the scroll value. However, it differs in that the
          background image is positioned relative to the element's padding box
          rather than its content box.
        </li>
        <li>
          initial and inherit: These values are used to set the
          background-attachment property to its initial value or inherit its
          value from the parent element, respectively.
        </li>
      </ol>
    </div>
  );
};

export default BackgroundImage;
