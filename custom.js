Blockly.Blocks['lightswitch'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("Turn")
            .appendField(new Blockly.FieldDropdown([
                ["red", "R"],
                ["yellow", "Y"],
                ["green", "G"],
                ["orange", "O"]
            ]), "lightcolor")
            .appendField(new Blockly.FieldDropdown([
                ["on", "on"],
                ["off", "off"]
            ]), "switch");
        this.setInputsInline(false);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(90);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.JavaScript['lightswitch'] = function(block) {
    var dropdown_lightcolor = block.getFieldValue('lightcolor');
    var dropdown_switch = block.getFieldValue('switch');
    // TODO: Assemble JavaScript into code variable.
    if (dropdown_switch == "on" && dropdown_lightcolor == "R") {
        var code = "document.getElementById('circle').style.backgroundColor='red';"
    }
    if (dropdown_switch == "on" && dropdown_lightcolor == "Y") {
        var code = "document.getElementById('circle').style.backgroundColor='yellow';"
    }
    if (dropdown_switch == "off") {
        var code = "document.getElementById('circle').style.backgroundColor='white';"
    }
    return code;
};

// ==========================
Blockly.Blocks['hsiung'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("Huang Chien Hsiung");
        this.setOutput(true, null);
        this.setColour(0);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.JavaScript['hsiung'] = function(block) {
    // TODO: Assemble JavaScript into code variable.
    // var code = 'window.alert(HCH)';
    // TODO: Change ORDER_NONE to the correct strength.
    return "window.console.log(" + 123 + ")"
}