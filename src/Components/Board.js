import React, { Fragment, useState } from "react";
import "./custom.css";

const Board = () => {
  const [imp, setImp] = useState(0);

  function calcITCMD(e) {
    e.preventDefault();

    var valorBem = document.querySelector("#valorBem").value;
    valorBem = valorBem
      .replace("R$ ", "")
      .replace(/\./g, "")
      .replace(/,/g, ".");
    valorBem = parseFloat(valorBem);

    var umPorc = 0;

    var vinteSubtrai = valorBem - 20000;
    var tresPorc = 0;

    var cinquentaSubtrai = valorBem - 50000;
    var cincoPorc = 0;

    var centoCinquentaSubtrai = valorBem - 150000;
    var setePorc = 0;

    if (valorBem <= 20000) {
      umPorc = (valorBem / 100) * 1;
    } else if (valorBem > 20000) {
      umPorc = (20000 / 100) * 1;
    }

    if (valorBem > 20000 && valorBem < 50000) {
      tresPorc = (vinteSubtrai / 100) * 3;
    } else if (valorBem > 50000) {
      tresPorc = (30000 / 100) * 3;
    }

    if (valorBem > 50000 && valorBem < 150000) {
      cincoPorc = (cinquentaSubtrai / 100) * 5;
    } else if (valorBem > 150000) {
      cincoPorc = (100000 / 100) * 5;
    }

    if (valorBem >= 150000) {
      setePorc = (centoCinquentaSubtrai / 100) * 7;
    }

    const impostoTotal = umPorc + tresPorc + cincoPorc + setePorc;
    setImp(impostoTotal);
  }

  function maskDinheiro(e) {
    var _target = e.target;
    var newValue;
    var valueTyped = _target.value;
    valueTyped = valueTyped
      .replace(/\D/g, "")
      .replace(/\./g, "")
      .replace(/,/g, "  ");

    if (valueTyped.length >= 3) {
      var splitValue = valueTyped;
      var lastTwo = splitValue.match(/\d{2}$/g);
      var groupThree = [];

      splitValue = splitValue.replace(/\d{2}$/g, "");

      for (var i = splitValue.length; i >= 3; i = splitValue.length) {
        var lastThree = splitValue.match(/\d{3}$/g);

        groupThree.push(lastThree);

        splitValue = splitValue.replace(/\d{3}$/g, "");
      }

      newValue = splitValue;

      for (i = groupThree.length - 1; i >= 0; i--) {
        newValue =
          (newValue !== "" ? newValue + "." : newValue + "") + groupThree[i];
      }

      newValue = lastTwo ? newValue + "," + lastTwo : "";
    }

    _target.value = "R$ " + (newValue ? newValue : valueTyped);
  }

  return (
    <Fragment>
      <div className="_8/12 _center _bdrs5 _bdprimary _bd2 _psm _p@tabletV _plg@laptop _bglightGray _tac">
        <h2 className="_mt0">ITCMD Santa Catarina</h2>
        <div>
          Imposto sobre Transmissão Causa Mortis e Doação é um tributo de
          competência dos Estados e do Distrito Federal, tem como fato gerador a
          transmissão causa mortis ou a doação de quaisquer bens ou direitos,
          conforme Constituição Federal - artigo 155, I e § 1º.
        </div>
        <form
          className="c-Board__Inputs _pvsm _df@tabletV _jcc _aic"
          onSubmit={(e) => calcITCMD(e)}
        >
          <div>Qual o valor do bem?</div>
          <input
            onInput={(e) => maskDinheiro(e)}
            defaultValue="R$ "
            id="valorBem"
            className="_mhxs _mvxxs _mv0@tabletV _bdrs5 _pxxs"
          />
          <div>
            <button className="_bdrs5 _pvxxs _phxs" type="submit">
              Calcular
            </button>
          </div>
        </form>
        <div className="_mtxs">
          <div>O valor do imposto sobre este bem será de:</div>
          <h2 className="_mtxxs _mb0 _primary">
            {parseFloat(imp).toLocaleString("pt-br", {
              style: "currency",
              currency: "BRL",
            })}
          </h2>
        </div>
      </div>
    </Fragment>
  );
};

export default Board;
