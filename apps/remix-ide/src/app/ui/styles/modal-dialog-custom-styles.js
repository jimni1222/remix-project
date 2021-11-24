var csjs = require('csjs-inject')

var css = csjs`
  .prompt_text {
    width: 100%;
  }

  .import_prompt_text {
    width: 100%;

    color: rgba(255,255,255,0.9);
    height: 36px;
    border-radius: 4px;
    border: solid 1px rgba(150, 153, 177, 0.75);
    background-color: #13141f;
    padding: 9px 12px;
  }

  .import_file_tab_button {
    font-size:13px;
    font-family: 'Roboto';
    font-weight: bold;
    position: relative;
    top: 1px;
    color: rgba(255, 255, 255, 0.6);
    padding: 8px 12px;
    display: inline-block;
    cursor: pointer;
    transition: border-color 200ms;
    border:0;
    border-bottom: 2px solid transparent;
    background-color:transparent;
    position:relative;
    outline:0;
  }

  .import_file .tab_wrapper {
    display: block;
    border-bottom: 1px solid rgba(150, 153, 178, 0.5);
    margin-bottom: 12px;
  }

  .keystore dl,
  .private_key dl {
    margin:0;
    display:table;
    width:100%;
    box-sizing:border-box;
  }

  .keystore dl {
    margin-bottom:16px;
  }

  .keystore dl dt,
  .private_key dl dt {
    display:table-cell;
    width:30%;
  }

  .keystore dl dd,
  .private_key dl dd {
    display:table-cell;
    width:70%;
  }

  .keystore dl input,
  .private_key dl input {
    margin:0;
  }

  .keystore dl dd .dummy_input_text {
    font-size: 13px;
    font-weight: normal;
    padding: 0 12px;
    border-radius: 4px;
    outline: 0;
    display: inline-block;
    vertical-align: middle;
    height: 36px;
    line-height: 36px;
    overflow: hidden;
    text-overflow: ellipsis;
    text-align: left;
    white-space: nowrap;
    border: 1px solid rgba(150, 153, 178, 0.1);
    color: rgba(255, 255, 255, 0.4);
    background-color: rgba(25, 26, 41, 0.15);
    border-color: rgba(150, 153, 178, 0.15);
    width:278px;
  }

  .keystore dl dd label {
      margin-bottom: 0px;
  }

  .keystore dl dd label,
  .private_key dl dd label {
      display: inline-block;
      vertical-align: middle;
      margin-left: 12px;
      cursor: pointer;
      padding: 0 10px;
      border-radius: 4px;
      width: 36px;
      height: 36px;
      line-height: 36px;
      background-color: #2f3998;
      background-image: url('/assets/img/file-more.svg');
      background-repeat: no-repeat;
      background-position: center;
      background-size: 18px;
      text-indent:-999em;
  }
`

module.exports = css
