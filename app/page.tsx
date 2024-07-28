"use client";
import { useState } from "react";

const Home = () => {
  const FontData = [
    [
      "𝐀",
      "𝐁",
      "𝐂",
      "𝐃",
      "𝐄",
      "𝐅",
      "𝐆",
      "𝐇",
      "𝐈",
      "𝐉",
      "𝐊",
      "𝐋",
      "𝐌",
      "𝐍",
      "𝐎",
      "𝐏",
      "𝐐",
      "𝐑",
      "𝐒",
      "𝐓",
      "𝐔",
      "𝐕",
      "𝐖",
      "𝐗",
      "𝐘",
      "𝐙",
      "𝐚",
      "𝐛",
      "𝐜",
      "𝐝",
      "𝐞",
      "𝐟",
      "𝐠",
      "𝐡",
      "𝐢",
      "𝐣",
      "𝐤",
      "𝐥",
      "𝐦",
      "𝐧",
      "𝐨",
      "𝐩",
      "𝐪",
      "𝐫",
      "𝐬",
      "𝐭",
      "𝐮",
      "𝐯",
      "𝐰",
      "𝐱",
      "𝐲",
      "𝐳",
    ],
    [
      "𝐴",
      "𝐵",
      "𝐶",
      "𝐷",
      "𝐸",
      "𝐹",
      "𝐺",
      "𝐻",
      "𝐼",
      "𝐽",
      "𝐾",
      "𝐿",
      "𝑀",
      "𝑁",
      "𝑂",
      "𝑃",
      "𝑄",
      "𝑅",
      "𝑆",
      "𝑇",
      "𝑈",
      "𝑉",
      "𝑊",
      "𝑋",
      "𝑌",
      "𝑍",
      "𝑎",
      "𝑏",
      "𝑐",
      "𝑑",
      "𝑒",
      "𝑓",
      "𝑔",
      "𝑕",
      "𝑖",
      "𝑗",
      "𝑘",
      "𝑙",
      "𝑚",
      "𝑛",
      "𝑜",
      "𝑝",
      "𝑞",
      "𝑟",
      "𝑠",
      "𝑡",
      "𝑢",
      "𝑣",
      "𝑤",
      "𝑥",
      "𝑦",
      "𝑧",
    ],
    [
      "𝑨",
      "𝑩",
      "𝑪",
      "𝑫",
      "𝑬",
      "𝑭",
      "𝑮",
      "𝑯",
      "𝑰",
      "𝑱",
      "𝑲",
      "𝑳",
      "𝑴",
      "𝑵",
      "𝑶",
      "𝑷",
      "𝑸",
      "𝑹",
      "𝑺",
      "𝑻",
      "𝑼",
      "𝑽",
      "𝑾",
      "𝑿",
      "𝒀",
      "𝒁",
      "𝒂",
      "𝒃",
      "𝒄",
      "𝒅",
      "𝒆",
      "𝒇",
      "𝒈",
      "𝒉",
      "𝒊",
      "𝒋",
      "𝒌",
      "𝒍",
      "𝒎",
      "𝒏",
      "𝒐",
      "𝒑",
      "𝒒",
      "𝒓",
      "𝒔",
      "𝒕",
      "𝒖",
      "𝒗",
      "𝒘",
      "𝒙",
      "𝒚",
      "𝒛",
    ],
    [
      "𝒜",
      "𝒝",
      "𝒞",
      "𝒟",
      "𝒠",
      "𝒡",
      "𝒢",
      "𝒣",
      "𝒤",
      "𝒥",
      "𝒦",
      "𝒧",
      "𝒨",
      "𝒩",
      "𝒪",
      "𝒫",
      "𝒬",
      "𝒭",
      "𝒮",
      "𝒯",
      "𝒰",
      "𝒱",
      "𝒲",
      "𝒳",
      "𝒴",
      "𝒵",
      "𝒶",
      "𝒷",
      "𝒸",
      "𝒹",
      "𝒺",
      "𝒻",
      "𝒼",
      "𝒽",
      "𝒾",
      "𝒿",
      "𝓀",
      "𝓁",
      "𝓂",
      "𝓃",
      "𝓄",
      "𝓅",
      "𝓆",
      "𝓇",
      "𝓈",
      "𝓉",
      "𝓊",
      "𝓋",
      "𝓌",
      "𝓍",
      "𝓎",
      "𝓏",
    ],
    [
      "𝓐",
      "𝓑",
      "𝓒",
      "𝓓",
      "𝓔",
      "𝓕",
      "𝓖",
      "𝓗",
      "𝓘",
      "𝓙",
      "𝓚",
      "𝓛",
      "𝓜",
      "𝓝",
      "𝓞",
      "𝓟",
      "𝓠",
      "𝓡",
      "𝓢",
      "𝓣",
      "𝓤",
      "𝓥",
      "𝓦",
      "𝓧",
      "𝓨",
      "𝓩",
      "𝓪",
      "𝓫",
      "𝓬",
      "𝓭",
      "𝓮",
      "𝓯",
      "𝓰",
      "𝓱",
      "𝓲",
      "𝓳",
      "𝓴",
      "𝓵",
      "𝓶",
      "𝓷",
      "𝓸",
      "𝓹",
      "𝓺",
      "𝓻",
      "𝓼",
      "𝓽",
      "𝓾",
      "𝓿",
      "𝔀",
      "𝔁",
      "𝔂",
      "𝔃",
    ],
    [
      "𝔄",
      "𝔅",
      "𝔆",
      "𝔇",
      "𝔈",
      "𝔉",
      "𝔊",
      "𝔋",
      "𝔌",
      "𝔍",
      "𝔎",
      "𝔏",
      "𝔐",
      "𝔑",
      "𝔒",
      "𝔓",
      "𝔔",
      "𝔕",
      "𝔖",
      "𝔗",
      "𝔘",
      "𝔙",
      "𝔚",
      "𝔛",
      "𝔜",
      "𝔝",
      "𝔞",
      "𝔟",
      "𝔠",
      "𝔡",
      "𝔢",
      "𝔣",
      "𝔤",
      "𝔥",
      "𝔦",
      "𝔧",
      "𝔨",
      "𝔩",
      "𝔪",
      "𝔫",
      "𝔬",
      "𝔭",
      "𝔮",
      "𝔯",
      "𝔰",
      "𝔱",
      "𝔲",
      "𝔳",
      "𝔴",
      "𝔵",
      "𝔶",
      "𝔷",
    ],
    [
      "𝔸",
      "𝔹",
      "𝔺",
      "𝔻",
      "𝔼",
      "𝔽",
      "𝔾",
      "𝔿",
      "𝕀",
      "𝕁",
      "𝕂",
      "𝕃",
      "𝕄",
      "𝕅",
      "𝕆",
      "𝕇",
      "𝕈",
      "𝕉",
      "𝕊",
      "𝕋",
      "𝕌",
      "𝕍",
      "𝕎",
      "𝕏",
      "𝕐",
      "𝕑",
      "𝕒",
      "𝕓",
      "𝕔",
      "𝕕",
      "𝕖",
      "𝕗",
      "𝕘",
      "𝕙",
      "𝕚",
      "𝕛",
      "𝕜",
      "𝕝",
      "𝕞",
      "𝕟",
      "𝕠",
      "𝕡",
      "𝕢",
      "𝕣",
      "𝕤",
      "𝕥",
      "𝕦",
      "𝕧",
      "𝕨",
      "𝕩",
      "𝕪",
      "𝕫",
    ],
    [
      "𝕬",
      "𝕭",
      "𝕮",
      "𝕯",
      "𝕰",
      "𝕱",
      "𝕲",
      "𝕳",
      "𝕴",
      "𝕵",
      "𝕶",
      "𝕷",
      "𝕸",
      "𝕹",
      "𝕺",
      "𝕻",
      "𝕼",
      "𝕽",
      "𝕾",
      "𝕿",
      "𝖀",
      "𝖁",
      "𝖂",
      "𝖃",
      "𝖄",
      "𝖅",
      "𝖆",
      "𝖇",
      "𝖈",
      "𝖉",
      "𝖊",
      "𝖋",
      "𝖌",
      "𝖍",
      "𝖎",
      "𝖏",
      "𝖐",
      "𝖑",
      "𝖒",
      "𝖓",
      "𝖔",
      "𝖕",
      "𝖖",
      "𝖗",
      "𝖘",
      "𝖙",
      "𝖚",
      "𝖛",
      "𝖜",
      "𝖝",
      "𝖞",
      "𝖟",
    ],
    [
      "𝖠",
      "𝖡",
      "𝖢",
      "𝖣",
      "𝖤",
      "𝖥",
      "𝖦",
      "𝖧",
      "𝖨",
      "𝖩",
      "𝖪",
      "𝖫",
      "𝖬",
      "𝖭",
      "𝖮",
      "𝖯",
      "𝖰",
      "𝖱",
      "𝖲",
      "𝖳",
      "𝖴",
      "𝖵",
      "𝖶",
      "𝖷",
      "𝖸",
      "𝖹",
      "𝖺",
      "𝖻",
      "𝖼",
      "𝖽",
      "𝖾",
      "𝖿",
      "𝗀",
      "𝗁",
      "𝗂",
      "𝗃",
      "𝗄",
      "𝗅",
      "𝗆",
      "𝗇",
      "𝗈",
      "𝗉",
      "𝗊",
      "𝗋",
      "𝗌",
      "𝗍",
      "𝗎",
      "𝗏",
      "𝗐",
      "𝗑",
      "𝗒",
      "𝗓",
    ],
    [
      "𝗔",
      "𝗕",
      "𝗖",
      "𝗗",
      "𝗘",
      "𝗙",
      "𝗚",
      "𝗛",
      "𝗜",
      "𝗝",
      "𝗞",
      "𝗟",
      "𝗠",
      "𝗡",
      "𝗢",
      "𝗣",
      "𝗤",
      "𝗥",
      "𝗦",
      "𝗧",
      "𝗨",
      "𝗩",
      "𝗪",
      "𝗫",
      "𝗬",
      "𝗭",
      "𝗮",
      "𝗯",
      "𝗰",
      "𝗱",
      "𝗲",
      "𝗳",
      "𝗴",
      "𝗵",
      "𝗶",
      "𝗷",
      "𝗸",
      "𝗹",
      "𝗺",
      "𝗻",
      "𝗼",
      "𝗽",
      "𝗾",
      "𝗿",
      "𝘀",
      "𝘁",
      "𝘂",
      "𝘃",
      "𝘄",
      "𝘅",
      "𝘆",
      "𝘇",
    ],
    [
      "𝘈",
      "𝘉",
      "𝘊",
      "𝘋",
      "𝘌",
      "𝘍",
      "𝘎",
      "𝘏",
      "𝘐",
      "𝘑",
      "𝘒",
      "𝘓",
      "𝘔",
      "𝘕",
      "𝘖",
      "𝘗",
      "𝘘",
      "𝘙",
      "𝘚",
      "𝘛",
      "𝘜",
      "𝘝",
      "𝘞",
      "𝘟",
      "𝘠",
      "𝘡",
      "𝘢",
      "𝘣",
      "𝘤",
      "𝘥",
      "𝘦",
      "𝘧",
      "𝘨",
      "𝘩",
      "𝘪",
      "𝘫",
      "𝘬",
      "𝘭",
      "𝘮",
      "𝘯",
      "𝘰",
      "𝘱",
      "𝘲",
      "𝘳",
      "𝘴",
      "𝘵",
      "𝘶",
      "𝘷",
      "𝘸",
      "𝘹",
      "𝘺",
      "𝘻",
    ],
    [
      "𝘼",
      "𝘽",
      "𝘾",
      "𝘿",
      "𝙀",
      "𝙁",
      "𝙂",
      "𝙃",
      "𝙄",
      "𝙅",
      "𝙆",
      "𝙇",
      "𝙈",
      "𝙉",
      "𝙊",
      "𝙋",
      "𝙌",
      "𝙍",
      "𝙎",
      "𝙏",
      "𝙐",
      "𝙑",
      "𝙒",
      "𝙓",
      "𝙔",
      "𝙕",
      "𝙖",
      "𝙗",
      "𝙘",
      "𝙙",
      "𝙚",
      "𝙛",
      "𝙜",
      "𝙝",
      "𝙞",
      "𝙟",
      "𝙠",
      "𝙡",
      "𝙢",
      "𝙣",
      "𝙤",
      "𝙥",
      "𝙦",
      "𝙧",
      "𝙨",
      "𝙩",
      "𝙪",
      "𝙫",
      "𝙬",
      "𝙭",
      "𝙮",
      "𝙯",
    ],
    [
      "𝙰",
      "𝙱",
      "𝙲",
      "𝙳",
      "𝙴",
      "𝙵",
      "𝙶",
      "𝙷",
      "𝙸",
      "𝙹",
      "𝙺",
      "𝙻",
      "𝙼",
      "𝙽",
      "𝙾",
      "𝙿",
      "𝚀",
      "𝚁",
      "𝚂",
      "𝚃",
      "𝚄",
      "𝚅",
      "𝚆",
      "𝚇",
      "𝚈",
      "𝚉",
      "𝚊",
      "𝚋",
      "𝚌",
      "𝚍",
      "𝚎",
      "𝚏",
      "𝚐",
      "𝚑",
      "𝚒",
      "𝚓",
      "𝚔",
      "𝚕",
      "𝚖",
      "𝚗",
      "𝚘",
      "𝚙",
      "𝚚",
      "𝚛",
      "𝚜",
      "𝚝",
      "𝚞",
      "𝚟",
      "𝚠",
      "𝚡",
      "𝚢",
      "𝚣",
    ],
  ];
  const NumbersData = [
    ["𝟎", "𝟏", "𝟐", "𝟑", "𝟒", "𝟓", "𝟔", "𝟕", "𝟖", "𝟗"],
    ["𝟘", "𝟙", "𝟚", "𝟛", "𝟜", "𝟝", "𝟞", "𝟟", "𝟠", "𝟡"],
    ["𝟢", "𝟣", "𝟤", "𝟥", "𝟦", "𝟧", "𝟨", "𝟩", "𝟪", "𝟫"],
    ["𝟬", "𝟭", "𝟮", "𝟯", "𝟰", "𝟱", "𝟲", "𝟳", "𝟴", "𝟵"],
    ["𝟶", "𝟷", "𝟸", "𝟹", "𝟺", "𝟻", "𝟼", "𝟽", "𝟾", "𝟿"],
  ];

  const ABCIndex = [
    { id: 0, value: "A" },
    { id: 1, value: "B" },
    { id: 2, value: "C" },
    { id: 3, value: "D" },
    { id: 4, value: "E" },
    { id: 5, value: "F" },
    { id: 6, value: "G" },
    { id: 7, value: "H" },
    { id: 8, value: "I" },
    { id: 9, value: "J" },
    { id: 10, value: "K" },
    { id: 11, value: "L" },
    { id: 12, value: "M" },
    { id: 13, value: "N" },
    { id: 14, value: "O" },
    { id: 15, value: "P" },
    { id: 16, value: "Q" },
    { id: 17, value: "R" },
    { id: 18, value: "S" },
    { id: 19, value: "T" },
    { id: 20, value: "U" },
    { id: 21, value: "V" },
    { id: 22, value: "W" },
    { id: 23, value: "X" },
    { id: 24, value: "Y" },
    { id: 25, value: "Z" },
    { id: 26, value: "a" },
    { id: 27, value: "b" },
    { id: 28, value: "c" },
    { id: 29, value: "d" },
    { id: 30, value: "e" },
    { id: 31, value: "f" },
    { id: 32, value: "g" },
    { id: 33, value: "h" },
    { id: 34, value: "i" },
    { id: 35, value: "j" },
    { id: 36, value: "k" },
    { id: 37, value: "l" },
    { id: 38, value: "m" },
    { id: 39, value: "n" },
    { id: 40, value: "o" },
    { id: 41, value: "p" },
    { id: 42, value: "q" },
    { id: 43, value: "r" },
    { id: 44, value: "s" },
    { id: 45, value: "t" },
    { id: 46, value: "u" },
    { id: 47, value: "v" },
    { id: 48, value: "w" },
    { id: 49, value: "x" },
    { id: 50, value: "y" },
    { id: 51, value: "z" },
    { id: 52, value: "" },
  ];
  const [MyTextS, setMyTextS] = useState("");
  const [NumberStyle, setNumberStyle] = useState(0);
  const SmallText = MyTextS.split("");

  const GetSIndex = (element: string, i: number) => {
    const indx = ABCIndex.filter((el) => el.value === element);
    if (indx.toString() === "") {
      console.log(indx.toString());
      if (
        ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"].includes(element)
      ) {
        return NumbersData[NumberStyle][parseInt(element)];
      } else {
        return element;
      }
    } else {
      if (indx[0]) {
        return FontData[i][indx[0].id];
      } else {
        element;
      }
    }
  };
  const GetSIndexRandom = (element: string) => {
    const i = Math.floor(Math.random() * 12);
    const indx = ABCIndex.filter((el) => el.value === element);
    if (indx.toString() === "") {
      console.log(indx.toString());
      if (
        ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"].includes(element)
      ) {
        return NumbersData[NumberStyle][parseInt(element)];
      } else {
        return element;
      }
    } else {
      if (indx[0]) {
        return FontData[i][indx[0].id];
      } else {
        element;
      }
    }
  };

  return (
    <div className="md:mx-10 mx-2 my-5 ">
      <div className="text-3xl font-bold">
        Unicode Font Varitions for Social Media Platforms
      </div>
      <br />
      <div>Selected Number style</div>
      <select
        onClick={(e) => console.log((e.target as HTMLTextAreaElement).value)}
        style={{ color: "black", backgroundColor: "white" }}>
        <option style={{ color: "black", backgroundColor: "white" }} value={0}>
          {NumbersData[0]}
        </option>
        <option style={{ color: "black", backgroundColor: "white" }} value={1}>
          {NumbersData[1]}
        </option>
        <option style={{ color: "black", backgroundColor: "white" }} value={2}>
          {NumbersData[2]}
        </option>
        <option style={{ color: "black", backgroundColor: "white" }} value={3}>
          {NumbersData[3]}
        </option>
        <option style={{ color: "black", backgroundColor: "white" }} value={4}>
          {NumbersData[4]}
        </option>
      </select>
      <div>Enter Text Here</div>
      <input
        type="text"
        placeholder="Enter Text Here"
        onChange={(e) => setMyTextS(e.target.value)}
        style={{ width: "100%", color: "black", backgroundColor: "white" }}
      />

      <div>
        <div>
          {SmallText.map((element, ind) => (
            <span key={ind}>
              {element !== " " ? GetSIndex(element, 0) : <>&nbsp;</>}
            </span>
          ))}
        </div>
        <br />
        <div>
          {SmallText.map((element, ind) => (
            <span key={ind}>
              {element !== " " ? GetSIndex(element, 1) : <>&nbsp;</>}
            </span>
          ))}
        </div>
        <br />
        <div>
          {SmallText.map((element, ind) => (
            <span key={ind}>
              {element !== " " ? GetSIndex(element, 2) : <>&nbsp;</>}
            </span>
          ))}{" "}
        </div>{" "}
        <br />
        <div>
          {SmallText.map((element, ind) => (
            <span key={ind}>
              {element !== " " ? GetSIndex(element, 3) : <>&nbsp;</>}
            </span>
          ))}{" "}
        </div>{" "}
        <br />
        <div>
          {SmallText.map((element, ind) => (
            <span key={ind}>
              {element !== " " ? GetSIndex(element, 4) : <>&nbsp;</>}
            </span>
          ))}{" "}
        </div>{" "}
        <br />
        <div>
          {SmallText.map((element, ind) => (
            <span key={ind}>
              {element !== " " ? GetSIndex(element, 5) : <>&nbsp;</>}
            </span>
          ))}{" "}
        </div>{" "}
        <br />
        <div>
          {SmallText.map((element, ind) => (
            <span key={ind}>
              {element !== " " ? GetSIndex(element, 6) : <>&nbsp;</>}
            </span>
          ))}{" "}
        </div>{" "}
        <br />
        <div>
          {SmallText.map((element, ind) => (
            <span key={ind}>
              {element !== " " ? GetSIndex(element, 7) : <>&nbsp;</>}
            </span>
          ))}{" "}
        </div>{" "}
        <br />
        <div>
          {SmallText.map((element, ind) => (
            <span key={ind}>
              {element !== " " ? GetSIndex(element, 8) : <>&nbsp;</>}
            </span>
          ))}{" "}
        </div>{" "}
        <br />
        <div>
          {SmallText.map((element, ind) => (
            <span key={ind}>
              {element !== " " ? GetSIndex(element, 9) : <>&nbsp;</>}
            </span>
          ))}{" "}
        </div>{" "}
        <br />
        <div>
          {SmallText.map((element, ind) => (
            <span key={ind}>
              {element !== " " ? GetSIndex(element, 10) : <>&nbsp;</>}
            </span>
          ))}{" "}
        </div>
        <br />
        <div>
          {SmallText.map((element, ind) => (
            <span key={ind}>
              {element !== " " ? GetSIndex(element, 11) : <>&nbsp;</>}
            </span>
          ))}{" "}
        </div>{" "}
        <br />
        <div>
          {SmallText.map((element, ind) => (
            <span key={ind}>
              {element !== " " ? GetSIndex(element, 12) : <>&nbsp;</>}
            </span>
          ))}{" "}
        </div>
        <br />
        <div>
          {SmallText.map((element, ind) => (
            <span key={ind}>
              {element !== " " ? GetSIndexRandom(element) : <>&nbsp;</>}
            </span>
          ))}{" "}
        </div>
      </div>
    </div>
  );
};

export default Home;
