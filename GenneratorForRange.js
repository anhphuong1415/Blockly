goog.require('Blockly.JavaScript');

Blockly.JavaScript['playmusicnote'] = function (block) {
  var dropdown_note = block.getFieldValue('Note');
  var duration = Blockly.JavaScript.valueToCode(block, 'Duration', Blockly.JavaScript.ORDER_NONE) || '0';
  const payload = JSON.stringify({
    type: 'PLAY_MUSIC_NOTE',
    message: {
      note: dropdown_note,
      duration,
    },
  });
  var code = "sendApp('" + payload + "');\n" + 'waitForSeconds(' + duration + ');\n';
  return code;
};

Blockly.JavaScript['rgb_led'] = function (block) {
  var colour_color_left = block.getFieldValue('color_left');
  var colour_color_right = block.getFieldValue('color_right');
  var number_duration = Blockly.JavaScript.valueToCode(block, 'Duration', Blockly.JavaScript.ORDER_NONE) || '0';

  const payload = JSON.stringify({
    type: 'SET_LED_RGB',
    message: {
      bulb1: colour_color_left,
      bulb2: colour_color_right,
      duration: number_duration,
    },
  });
  var code = "sendApp('" + payload + "');\n" + 'waitForSeconds(' + number_duration + ');\n';
  return code;
};

Blockly.JavaScript['robot_move'] = function (block) {
  var dropdown_direction = block.getFieldValue('Direction');
  var number_velocity = block.getFieldValue('Velocity');
  var number_duration = Blockly.JavaScript.valueToCode(block, 'Duration', Blockly.JavaScript.ORDER_NONE) || '0';;
  if (dropdown_direction == 'FORWARD') var dir = 'FORWARD';
  else if (dropdown_direction == 'BACKWARD') var dir = 'BACKWARD';
  else if (dropdown_direction == 'TURNLEFT') var dir = 'TURNLEFT';
  else if (dropdown_direction == 'TURNRIGHT') var dir = 'TURNRIGHT';
  else dir = 0;

  const payload = JSON.stringify({
    type: 'MOVE',
    message: {
      dir,
      number_duration,
      number_velocity,
    },
  });
  var code = "sendApp('" + payload + "');\n" + 'waitForSeconds(' + number_duration + ');\n';

  const payload2 = JSON.stringify({
    type: 'STOP',
  });
  code += "sendApp('" + payload2 + "');\n";

  return code;
};

Blockly.JavaScript['robot_continue_move'] = function (block) {
  var dropdown_direction = block.getFieldValue('Direction');
  var duration = -1;
  var number_velocity = block.getFieldValue('Velocity');
  if (dropdown_direction == 'FORWARD') var dir = 'FORWARD';
  else if (dropdown_direction == 'BACKWARD') var dir = 'BACKWARD';
  else if (dropdown_direction == 'TURNLEFT') var dir = 'TURNLEFT';
  else if (dropdown_direction == 'TURNRIGHT') var dir = 'TURNRIGHT';
  else dir = 0;

  const payload = JSON.stringify({
    type: 'MOVE',
    message: {
      dir,
      duration,
      number_velocity
    },
  });
  var code = "sendApp('" + payload + "');\n";

  return code;
};

Blockly.JavaScript['playwithmatrix'] = function (block) {
  var dropdown_port = block.getFieldValue('Port');
  var map = block.getFieldValue('Map');
  var number_duration = Blockly.JavaScript.valueToCode(block, 'Duration', Blockly.JavaScript.ORDER_NONE) || '0';

  if (dropdown_port == 'Port 1') var port = 1;
  else if (dropdown_port == 'Port 2') var port = 2;
  else if (dropdown_port == 'Port 3') var port = 3;
  else if (dropdown_port == 'Port 4') var port = 4;
  else if (dropdown_port == 'Port 5') var port = 5;
  else if (dropdown_port == 'Port 6') var port = 6;
  else if (dropdown_port == 'Port 7') var port = 7;
  else if (dropdown_port == 'Port 8') var port = 8;

  const payload = JSON.stringify({
    type: 'MATRIX_LED',
    message: {
      port,
      number_duration,
      map,
    },
  });
  var code = "sendApp('" + payload + "');";
  //console.log('MAP: ' + code);
  return code;
};

Blockly.JavaScript['playwithmatrixledchar'] = function (block) {
  matrixCharMap = [
    ['0x18', '0x3C', '0x66', '0x66', '0x7E', '0x66', '0x66', '0x66'], //A
    ['0x78', '0x64', '0x68', '0x78', '0x64', '0x66', '0x66', '0x7C'], //B
    ['0x3C', '0x62', '0x60', '0x60', '0x60', '0x62', '0x62', '0x3C'], //C
    ['0x78', '0x64', '0x66', '0x66', '0x66', '0x66', '0x64', '0x78'], //D
    ['0x7E', '0x60', '0x60', '0x7C', '0x60', '0x60', '0x60', '0x7E'], //E
    ['0x7E', '0x60', '0x60', '0x7C', '0x60', '0x60', '0x60', '0x60'], //F
    ['0x3C', '0x62', '0x60', '0x60', '0x66', '0x62', '0x62', '0x3C'], //G
    ['0x66', '0x66', '0x66', '0x7E', '0x66', '0x66', '0x66', '0x66'], //H
    ['0x7E', '0x18', '0x18', '0x18', '0x18', '0x18', '0x18', '0x7E'], //I
    ['0x7E', '0x18', '0x18', '0x18', '0x18', '0x18', '0x1A', '0x0C'], //J
    ['0x62', '0x64', '0x68', '0x70', '0x70', '0x68', '0x64', '0x62'], //K
    ['0x60', '0x60', '0x60', '0x60', '0x60', '0x60', '0x60', '0x7E'], //L
    ['0xC3', '0xE7', '0xDB', '0xDB', '0xC3', '0xC3', '0xC3', '0xC3'], //M
    ['0x62', '0x62', '0x52', '0x52', '0x4A', '0x4A', '0x46', '0x46'], //N
    ['0x3C', '0x66', '0x66', '0x66', '0x66', '0x66', '0x66', '0x3C'], //O
    ['0x7C', '0x62', '0x62', '0x7C', '0x60', '0x60', '0x60', '0x60'], //P
    ['0x38', '0x64', '0x64', '0x64', '0x64', '0x6C', '0x64', '0x3A'], //Q
    ['0x7C', '0x62', '0x62', '0x7C', '0x70', '0x68', '0x64', '0x62'], //R
    ['0x1C', '0x22', '0x30', '0x18', '0x0C', '0x46', '0x46', '0x3C'], //S
    ['0x7E', '0x18', '0x18', '0x18', '0x18', '0x18', '0x18', '0x18'], //T
    ['0x66', '0x66', '0x66', '0x66', '0x66', '0x66', '0x66', '0x3C'], //U
    ['0x66', '0x66', '0x66', '0x66', '0x66', '0x66', '0x3C', '0x18'], //V
    ['0x81', '0x81', '0x81', '0x81', '0x81', '0x99', '0x99', '0x66'], //W
    ['0x42', '0x42', '0x24', '0x18', '0x18', '0x24', '0x42', '0x42'], //X
    ['0xC3', '0x66', '0x3C', '0x18', '0x18', '0x18', '0x18', '0x18'], //Y
    ['0x7E', '0x02', '0x04', '0x08', '0x10', '0x20', '0x40', '0x7E'], //Z
    ['0x3C', '0x66', '0x66', '0x6E', '0x76', '0x66', '0x66', '0x3C'], //0
    ['0x18', '0x38', '0x58', '0x18', '0x18', '0x18', '0x18', '0x7E'], //1
    ['0x3C', '0x66', '0x66', '0x0C', '0x18', '0x30', '0x7E', '0x7E'], //2
    ['0x7E', '0x0C', '0x18', '0x3C', '0x06', '0x06', '0x46', '0x3C'], //3
    ['0x0C', '0x18', '0x30', '0x6C', '0x6C', '0x7E', '0x0C', '0x0C'], //4
    ['0x7E', '0x60', '0x60', '0x7C', '0x06', '0x06', '0x46', '0x3C'], //5
    ['0x04', '0x08', '0x10', '0x38', '0x6C', '0x66', '0x66', '0x3C'], //6
    ['0x7E', '0x46', '0x0C', '0x18', '0x18', '0x18', '0x18', '0x18'], //7
    ['0x3C', '0x66', '0x66', '0x3C', '0x66', '0x66', '0x66', '0x3C'], //8
    ['0x3C', '0x66', '0x66', '0x36', '0x1C', '0x08', '0x10', '0x20'], //9
  ];

  var dropdown_port = block.getFieldValue('Port');
  var text_char = block.getFieldValue('char');
  var number_duration = block.getFieldValue('Duration');

  if (dropdown_port == 'Port 1') var port = 1;
  else if (dropdown_port == 'Port 2') var port = 2;
  else if (dropdown_port == 'Port 3') var port = 3;
  else if (dropdown_port == 'Port 4') var port = 4;
  else if (dropdown_port == 'Port 5') var port = 5;
  else if (dropdown_port == 'Port 6') var port = 6;
  else if (dropdown_port == 'Port 7') var port = 7;
  else if (dropdown_port == 'Port 8') var port = 8;
  var code =
    'sendCmd(' +
    '2,' +
    port +
    ',7,' +
    number_duration +
    ',0,0,' +
    matrixCharMap[text_char.charCodeAt(0) - 65].toString() +
    ', 0, 0, 0, 0);\n';
  return code;
};

Blockly.JavaScript['matrixlebspecialchar'] = function (block) {
  var dropdown_port = block.getFieldValue('Port');
  var dropdown_name = block.getFieldValue('NAME');
  var number_duration = block.getFieldValue('Duration');

  // TODO: Assemble JavaScript into code variable.
  if (dropdown_port == 'Port 1') var port = 1;
  else if (dropdown_port == 'Port 2') var port = 2;
  else if (dropdown_port == 'Port 3') var port = 3;
  else if (dropdown_port == 'Port 4') var port = 4;
  else if (dropdown_port == 'Port 5') var port = 5;
  else if (dropdown_port == 'Port 6') var port = 6;
  else if (dropdown_port == 'Port 7') var port = 7;
  else if (dropdown_port == 'Port 8') var port = 8;

  if (dropdown_name == 'arrowl2r') var vl = 300;
  else if (dropdown_name == 'arrowr2l') var vl = 301;
  else if (dropdown_name == 'arrow_up') var vl = 302;
  else if (dropdown_name == 'arrow_down') var vl = 303;
  else if (dropdown_name == 'heart') var vl = 304;
  else if (dropdown_name == 'smile') var vl = 305;
  else if (dropdown_name == 'star') var vl = 306;
  else if (dropdown_name == 'effect_1') var vl = 307;
  else if (dropdown_name == 'effect_2') var vl = 308;
  else if (dropdown_name == 'effect_3') var vl = 309;

  var code =
    'sendCmd(' +
    '2,' +
    port +
    ',7,' +
    number_duration +
    ',0,0,' +
    vl +
    ', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);\n';
  return code;
};

Blockly.JavaScript['turnoffledrbg'] = function (block) {
  // TODO: Assemble JavaScript into code variable.

  const payload = JSON.stringify({
    type: 'TURN_OFF_LEDRGB',
  });
  var code = "sendApp('" + payload + "');";
  return code;
};

Blockly.JavaScript['ringled'] = function (block) {
  var dropdown_port = block.getFieldValue('ringLedModule');
  var colour_led_1 = block.getFieldValue('LED').L9;
  var colour_led_2 = block.getFieldValue('LED').L10;
  var colour_led_3 = block.getFieldValue('LED').L11;
  var colour_led_4 = block.getFieldValue('LED').L12;
  var colour_led_5 = block.getFieldValue('LED').L1;
  var colour_led_6 = block.getFieldValue('LED').L2;
  var colour_led_7 = block.getFieldValue('LED').L3;
  var colour_led_8 = block.getFieldValue('LED').L4;
  var colour_led_9 = block.getFieldValue('LED').L5;
  var colour_led_10 = block.getFieldValue('LED').L6;
  var colour_led_11 = block.getFieldValue('LED').L7;
  var colour_led_12 = block.getFieldValue('LED').L8;

  if (dropdown_port == 'Port 1') var port = 1;
  else if (dropdown_port == 'Port 2') var port = 2;
  else if (dropdown_port == 'Port 3') var port = 3;
  else if (dropdown_port == 'Port 4') var port = 4;
  else if (dropdown_port == 'Port 5') var port = 5;
  else if (dropdown_port == 'Port 6') var port = 6;
  else if (dropdown_port == 'Port 7') var port = 7;
  else if (dropdown_port == 'Port 8') var port = 8;

  const payload = JSON.stringify({
    type: 'SET_RING_LED',
    message: {
      bulb1: colour_led_1,
      bulb2: colour_led_2,
      bulb3: colour_led_3,
      bulb4: colour_led_4,
      bulb5: colour_led_5,
      bulb6: colour_led_6,
      bulb7: colour_led_7,
      bulb8: colour_led_8,
      bulb9: colour_led_9,
      bulb10: colour_led_10,
      bulb11: colour_led_11,
      bulb12: colour_led_12,
    },
    port,
  });
  var code = "sendApp('" + payload + "');";
  return code;
};

Blockly.JavaScript['servo'] = function (block) {
  var dropdown_servo_select = block.getFieldValue('Servo_Select');
  var angle_angle = block.getFieldValue('Angle');
  if (dropdown_servo_select == 'Servo_1') var servo = 1;
  else if (dropdown_servo_select == 'Servo_2') var servo = 2;
  else if (dropdown_servo_select == 'Both') var servo = 3;
  const payload = JSON.stringify({
    type: 'SERVO',
    message: {
      servo,
      angle_angle,
    },
  });
  var code = "sendApp('" + payload + "');";
  return code;
};

Blockly.JavaScript['motorselect'] = function (block) {
  var dropdown_motorselect = block.getFieldValue('MotorSelect');
  var number_velocity = block.getFieldValue('velocity');
  if (dropdown_motorselect == 'Left') var motor = 1;
  else if (dropdown_motorselect == 'Right') var motor = 2;
  else if (dropdown_motorselect == 'Both') var motor = 3;

  const payload = JSON.stringify({
    type: 'MOTOR',
    message: {
      motor,
      number_velocity
    },
  });
  var code = "sendApp('" + payload + "');\n"
  ;
  return code;
};

Blockly.JavaScript['two_motor'] = function (block) {
  var leftVel = block.getFieldValue('LeftVel');
  var leftDuration = Blockly.JavaScript.valueToCode(block, 'LeftDuration', Blockly.JavaScript.ORDER_NONE) || '0';
  var rightVel = block.getFieldValue('RightVel');
  var rightDuration = Blockly.JavaScript.valueToCode(block, 'RightDuration', Blockly.JavaScript.ORDER_NONE) || '0';

  const payload = JSON.stringify({
    type: 'DUAL_MOTOR',
    message: {
      leftVel,
      leftDuration,
      rightVel,
      rightDuration
    }
  });
  var code = "sendApp('" + payload + "');\n" + 'waitForSeconds(' + Math.max(leftDuration, rightDuration) + ');\n';
  const payload2 = JSON.stringify({
    type: 'STOP',
  });
  code += "sendApp('" + payload2 + "');\n"
  return code;
};

Blockly.JavaScript['srf05'] = function (block) {
  var dropdown_port = block.getFieldValue('port');
  if (dropdown_port == 'Port 1') var port = 1;
  else if (dropdown_port == 'Port 2') var port = 2;
  else if (dropdown_port == 'Port 3') var port = 3;
  else if (dropdown_port == 'Port 4') var port = 4;
  else if (dropdown_port == 'Port 5') var port = 5;
  else if (dropdown_port == 'Port 6') var port = 6;
  else if (dropdown_port == 'Port 7') var port = 7;
  else if (dropdown_port == 'Port 8') var port = 8;

  const payload = JSON.stringify({
    type: 'GET_SRF_SENSOR',
    port,
  });
  var code = "sendApp('" + payload + "')";
  // Android.JSrequsetShow("Super sonic sensor: ");
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['light_sensor'] = function (block) {
  var dropdown_port = block.getFieldValue('Port');
  if (dropdown_port == 'Port 1') var port = 1;
  else if (dropdown_port == 'Port 2') var port = 2;
  else if (dropdown_port == 'Port 3') var port = 3;
  else if (dropdown_port == 'Port 4') var port = 4;
  else if (dropdown_port == 'Port 5') var port = 5;
  else if (dropdown_port == 'Port 6') var port = 6;
  else if (dropdown_port == 'Port 7') var port = 7;
  else if (dropdown_port == 'Port 8') var port = 8;

  const payload = JSON.stringify({
    type: 'GET_LIGHT_SENSOR',
    port,
  });
  var code = "sendApp('" + payload + "')";
  // Android.JSrequsetShow("light sensor: ");
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['colorsensor'] = function (block) {
  var dropdown_port = block.getFieldValue('Port');
  if (dropdown_port == 'Port 1') var port = 1;
  else if (dropdown_port == 'Port 2') var port = 2;
  else if (dropdown_port == 'Port 3') var port = 3;
  else if (dropdown_port == 'Port 4') var port = 4;
  else if (dropdown_port == 'Port 5') var port = 5;
  else if (dropdown_port == 'Port 6') var port = 6;
  else if (dropdown_port == 'Port 7') var port = 7;
  else if (dropdown_port == 'Port 8') var port = 8;

  const payload = JSON.stringify({
    type: 'GET_COLOR_SENSOR',
    port,
  });
  var code = "sendApp('" + payload + "')";

  // Android.JSrequsetShow("Color sensor: ");
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['sound_sensor'] = function (block) {
  var dropdown_port = block.getFieldValue('Port');
  if (dropdown_port == 'Port 1') var port = 1;
  else if (dropdown_port == 'Port 2') var port = 2;
  else if (dropdown_port == 'Port 3') var port = 3;
  else if (dropdown_port == 'Port 4') var port = 4;
  else if (dropdown_port == 'Port 5') var port = 5;
  else if (dropdown_port == 'Port 6') var port = 6;
  else if (dropdown_port == 'Port 7') var port = 7;
  else if (dropdown_port == 'Port 8') var port = 8;

  const payload = JSON.stringify({
    type: 'GET_SOUND_SENSOR',
    port,
  });
  var code = "sendApp('" + payload + "')";
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['path_detecter'] = function (block) {
  var dropdown_port = block.getFieldValue('Port');
  var dropdown_side = block.getFieldValue('side');
  var dropdown_color = block.getFieldValue('color');
  if (dropdown_port == 'Port 1') var port = 1;
  else if (dropdown_port == 'Port 2') var port = 2;
  else if (dropdown_port == 'Port 3') var port = 3;
  else if (dropdown_port == 'Port 4') var port = 4;
  else if (dropdown_port == 'Port 5') var port = 5;
  else if (dropdown_port == 'Port 6') var port = 6;
  else if (dropdown_port == 'Port 7') var port = 7;
  else if (dropdown_port == 'Port 8') var port = 8;

  if (dropdown_side == 'left') var side = 1;
  else var side = 2;

  if (dropdown_color == 'white') var colorFinding = 1;
  else var colorFinding = 2;

  const payload = JSON.stringify({
    type: 'MODE',
    message: {
      mode: 'LINE',
      colorFinding,
      port,
      side,
    },
  });
  var code = "sendApp('" + payload + "')";
  // Android.JSrequsetShow("Line detect sensor: ");
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['dummy_start_block'] = function (block) {
  const payload = JSON.stringify({
    type: 'START'
  });
  var code = '/*___START BLOCKLY PLAYGROUND PROGRAMING__*/\n' + "sendApp('" + payload + "')\n";
  return code;
};

Blockly.JavaScript['dummy_play_block'] = function (block) {
  const payload = JSON.stringify({
    type: 'START'
  });
  var code = '/*___START BLOCKLY PLAYGROUND PROGRAMING__*/\n';
  return code;
};

Blockly.JavaScript['if_block'] = function (block) {
  var value_condition = Blockly.JavaScript.valueToCode(
    block,
    'condition',
    Blockly.JavaScript.ORDER_ATOMIC,
  );
  var statements_if_block = Blockly.JavaScript.statementToCode(
    block,
    'if block',
  );
  var statements_else_block = Blockly.JavaScript.statementToCode(
    block,
    'else block',
  );
  var code =
    'if(' +
    value_condition +
    '){\n' +
    statements_if_block +
    '\n}' +
    'else{\n' +
    statements_else_block +
    '\n}';
  return code;
};

Blockly.JavaScript['if1'] = function (block) {
  var value_condition = Blockly.JavaScript.valueToCode(
    block,
    'condition',
    Blockly.JavaScript.ORDER_ATOMIC,
  );
  var statements_command = Blockly.JavaScript.statementToCode(block, 'command');
  var code = 'if(' + value_condition + '){\n' + statements_command + '\n}';
  return code;
};

Blockly.JavaScript['break_continue_loop'] = function (block) {
  var dropdown_action = block.getFieldValue('action');
  if (dropdown_action == 'nhảy vòng lặp') var st = 'continue';
  else st = 'break;';
  var code = st + ';\n';
  return code;
};

Blockly.JavaScript['loop'] = function (block) {
  var statements_command = Blockly.JavaScript.statementToCode(block, 'command');
  var number_name = block.getFieldValue('NAME');
  // TODO: Assemble JavaScript into code variable.
  var code =
    'for(var i = 0; i <' +
    number_name +
    ';i++){\n' +
    statements_command +
    '\n}';
  return code;
};

Blockly.JavaScript['stop_move'] = function (block) {
  const payload = JSON.stringify({
    type: 'STOP',
  });
  var code = "sendApp('" + payload + "');\n";
  return code;
};

Blockly.JavaScript['create_function'] = function (block) {
  var text_function_name = block.getFieldValue('Function_name');
  var statements_name = Blockly.JavaScript.statementToCode(block, 'NAME');
  // TODO: Assemble JavaScript into code variable.
  var code =
    'function ' + text_function_name + '(){\n' + statements_name + '\n}';
  return code;
};

Blockly.Blocks['turtle_basic'] = {
  init: function () {
    this.appendDummyInput().appendField('simple turtle');
    this.appendDummyInput()
      .setAlign(Blockly.ALIGN_CENTRE)
      .appendField(new CustomFields.FieldTurtle(), 'TURTLE');
    this.setStyle('loop_blocks');
    this.setCommentText('Demonstrates a turtle field with no validator.');
  },
};

Blockly.JavaScript['while'] = function (block) {
  // var value_condition = Blockly.JavaScript.valueToCode(block, 'condition', Blockly.JavaScript.ORDER_ATOMIC);
  var statements_actions = Blockly.JavaScript.statementToCode(block, 'actions');
  // TODO: Assemble JavaScript into code variable.
  var code = 'for(var i = 0; i < 10000; i++){\n' + statements_actions + '\n}';
  return code;
};

Blockly.JavaScript['test_cal_field'] = function (block) {
  // var value_condition = Blockly.JavaScript.valueToCode(block, 'condition', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'let k = ' + block.getFieldValue('NAME');
  // //console.log('CODE GEN: ' + code);
  return code;
};

Blockly.JavaScript['test_vel_field'] = function (block) {
  // var value_condition = Blockly.JavaScript.valueToCode(block, 'condition', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'var m = ' + block.getFieldValue('NAME');
  // //console.log('CODE GEN Vel: ' + code);
  return code;
};

Blockly.JavaScript['field_matrix'] = function (block) {
  // var value_condition = Blockly.JavaScript.valueToCode(block, 'condition', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'var m = ' + block.getFieldValue('NAME')[1];
  // //console.log('CODE GEN Vel: ' + code);
  return code;
};

Blockly.JavaScript['field_ring'] = function (block) {
  // var value_condition = Blockly.JavaScript.valueToCode(block, 'condition', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'var m = ' + block.getFieldValue('NAME').L1;
  //console.log('CODE GEN Vel: ' + code);
  return code;
};

Blockly.JavaScript['field_ledSegments'] = function (block) {
  var mapToBlocklySegLed = [0, 7, 3, 5, 6, 1, 2];
  var seg1 = block.getFieldValue('Map').segment1.split(',').map(v => v !== 'false');
  var seg2 = block.getFieldValue('Map').segment2.split(',').map(v => v !== 'false');
  var seg3 = block.getFieldValue('Map').segment3.split(',').map(v => v !== 'false');
  var seg4 = block.getFieldValue('Map').segment4.split(',').map(v => v !== 'false');
  var time = Blockly.JavaScript.valueToCode(block, 'Duration', Blockly.JavaScript.ORDER_NONE) || '0';

  let outputList = {};
  var segment1Value = 0;
  for(let i = 0; i < 7; i++)
  {
    segment1Value += (seg1[i] * Math.pow(2, mapToBlocklySegLed[i]));
  }
  outputList['segment1'] = ("0x" + segment1Value.toString(16));

  var segment2Value = 0;
  for(let i = 0; i < 7; i++)
  {
    segment2Value += (seg2[i] * Math.pow(2, mapToBlocklySegLed[i]));
  }
  outputList['segment2'] = ("0x" + segment2Value.toString(16));

  var segment3Value = 0;
  for(let i = 0; i < 7; i++)
  {
    segment3Value += (seg3[i] * Math.pow(2, mapToBlocklySegLed[i]));
  }
  outputList['segment3'] = ("0x" + segment3Value.toString(16));

  var segment4Value = 0;
  for(let i = 0; i < 7; i++)
  {
    segment4Value += (seg4[i] * Math.pow(2, mapToBlocklySegLed[i]));
  }
  outputList['segment4'] = ("0x" + segment4Value.toString(16));

  const payload = JSON.stringify({
    type: 'LED_7',
    message: {
      outputList,
      time
    },
  });
  var code = "sendApp('" + payload + "');\n" + 'waitForSeconds(' + time + ');\n';
  //console.log('LED_7 MAP: ' + code);
  return code;
};

Blockly.JavaScript['relay'] = function (block) {
  var state = block.getFieldValue('replayState');

  const payload = JSON.stringify({
    type: 'RELAY',
    message: {
      state,
    },
  });
  var code = "sendApp('" + payload + "');";
  //console.log('RELAY: ' + code);
  return code;
};

Blockly.JavaScript['single_led'] = function (block) {
  var state = block.getFieldValue('singleLedState');

  const payload = JSON.stringify({
    type: 'LED_ONLY',
    message: {
      state,
    },
  });
  var code = "sendApp('" + payload + "');";
  //console.log('SINGLE LED: ' + code);
  return code;
};

Blockly.JavaScript['traffic_light'] = function (block) {
  var greenLight = block.getFieldValue('Lights').greenLight;
  var yellowLight = block.getFieldValue('Lights').yellowLight;
  var redLight = block.getFieldValue('Lights').redLight;

  const payload = JSON.stringify({
    type: 'TRAFFIC_LIGHT',
    message: {
      greenLight,
      yellowLight,
      redLight
    },
  });
  var code = "sendApp('" + payload + "');";
  //console.log('TRAFFIC_LIGHT: ' + code);
  return code;
};

Blockly.JavaScript['keyboard'] = function (block) {
  var pressKey = block.getFieldValue('Key').pressKey;

  const payload = JSON.stringify({
    type: 'KEYBOARD',
    message: {
      pressKey,
    },
  });
  var code = "sendApp('" + payload + "');";
  //console.log('KEYBOARD: ' + code);
  return code;
};

Blockly.JavaScript['calculator'] = function (block) {
  var code = (block.getFieldValue('Value'));
  var order = code >= 0 ? Blockly.JavaScript.ORDER_ATOMIC :
              Blockly.JavaScript.ORDER_UNARY_NEGATION;
  //console.log('Cal: ' + [code, order]);
  return [code, order];
};

Blockly.JavaScript['wait_until'] = function (block) {
  var value_condition = Blockly.JavaScript.valueToCode(block, 'condition', Blockly.JavaScript.ORDER_ATOMIC) || '0';
  // TODO: Assemble JavaScript into code variable.
  var code = 'while(' + value_condition + ')\n' + '{}\n';
  return code;
};
