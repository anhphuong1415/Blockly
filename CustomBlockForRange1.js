Blockly.Blocks['playmusicnote'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(
        new Blockly.FieldImage('Utils/BlockIcon/music_player.png', 30, 30, {
          alt: '*',
          flipRtl: 'FALSE',
        }),
      )
      .appendField('Chơi nốt nhạc')
      .appendField(
        new Blockly.FieldDropdown([
          ['C', 'C'],
          ['C#', 'C#'],
          ['D', 'D'],
          ['D#', 'D#'],
          ['E', 'E'],
          ['F', 'F'],
          ['F#', 'F#'],
          ['G', 'G'],
          ['G#', 'G#'],
          ['A', 'A'],
          ['A#', 'A#'],
          ['B', 'B'],
        ]),
        'Note',
      )
      .appendField('trong ');
    this.appendValueInput('Duration');
    this.appendDummyInput().appendField('giây');
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(180);
    this.setTooltip('');
    this.setHelpUrl('');
  },
};

Blockly.Blocks['rgb_led'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(
        new Blockly.FieldImage('Utils/BlockIcon/rgb_led.png', 30, 30, {
          alt: '*',
          flipRtl: 'FALSE',
        }),
      )
      .setAlign(Blockly.ALIGN_CENTRE)
      .appendField('Led RGB sáng màu')
      .appendField(new Blockly.FieldColour('#00cccc'), 'color_left')
      .appendField(new Blockly.FieldColour('#00cccc'), 'color_right')
      .appendField('trong ');
    this.appendValueInput('Duration');
    this.appendDummyInput().appendField('giây');
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(180);
    this.setTooltip('');
    this.setHelpUrl('');
  },
};

Blockly.Blocks['robot_move'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(
        new Blockly.FieldDropdown([
          ['Tiến', 'Tiến'],
          ['Lùi', 'Lùi'],
          ['Rẽ trái', 'Rẽ trái'],
          ['Rẽ phải', 'Rẽ phải'],
        ]),
        'Direction',
      )
      .appendField('với vận tốc')
      .appendField(new CustomFields.FieldVelocity(0, 0, 255, 1), 'Velocity')
      .appendField('trong');
    this.appendValueInput('Duration');
    this.appendDummyInput().appendField('giây');
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(195);
    this.setTooltip('');
    this.setHelpUrl('');
  },
};

Blockly.Blocks['robot_continue_move'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(
        new Blockly.FieldDropdown([
          ['Tiến', 'Tiến'],
          ['Lùi', 'Lùi'],
          ['Rẽ trái', 'Rẽ trái'],
          ['Rẽ phải', 'Rẽ phải'],
        ]),
        'Direction',
      )
      .appendField('với vận tốc')
      .appendField(new CustomFields.FieldVelocity(0, 0, 255, 1), 'Velocity')
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(295);
    this.setTooltip('');
    this.setHelpUrl('');
  },
};

Blockly.Blocks['playwithmatrix'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(
        new Blockly.FieldImage('Utils/BlockIcon/dot_matrix.png', 30, 30, {
          alt: '*',
          flipRtl: 'FALSE',
        }),
      )
      .appendField('Ma trận Led ở')
      .appendField(
        new Blockly.FieldDropdown([
          ['Port 1', 'Port 1'],
          ['Port 2', 'Port 2'],
          ['Port 3', 'Port 3'],
          ['Port 4', 'Port 4'],
        ]),
        'Port',
      )
      .appendField(' hiển thị ')
      .appendField(new CustomFields.FieldMatrix(), 'Map')
      .appendField('trong');
    this.appendValueInput('Duration');
    this.appendDummyInput().appendField('giây');
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(180);
    this.setTooltip('');
    this.setHelpUrl('');
  },
};

Blockly.Blocks['field_ledSegments'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(
        new Blockly.FieldImage('Utils/BlockIcon/dot_matrix.png', 30, 30, {
          alt: '*',
          flipRtl: 'FALSE',
        }),
      )
      .appendField('Led 7 thanh hiển thị')
      .appendField(new CustomFields.FieldSegmentLed(), 'Map')
      .appendField('trong');
    this.appendValueInput('Duration');
    this.appendDummyInput().appendField('giây');
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(180);
    this.setTooltip('');
    this.setHelpUrl('');
  },
};

Blockly.Blocks['playwithmatrixledchar'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(
        new Blockly.FieldImage('Utils/BlockIcon/dot_matrix.png', 30, 30, {
          alt: '*',
          flipRtl: 'FALSE',
        }),
      )
      .appendField('Ma trận Led ở')
      .appendField(
        new Blockly.FieldDropdown([
          ['Port 1', 'Port 1'],
          ['Port 2', 'Port 2'],
          ['Port 3', 'Port 3'],
          ['Port 4', 'Port 4'],
        ]),
        'Port',
      )
      .appendField(' hiển thị chữ')
      .appendField(new Blockly.FieldTextInput('A'), 'char')
      .appendField('trong')
      .appendField(new CustomFields.FieldCalculate(0, 0, 255, 1), 'Duration')
      .appendField('giây');
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(180);
    this.setTooltip('');
    this.setHelpUrl('');
  },
};

Blockly.Blocks['matrixlebspecialchar'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(
        new Blockly.FieldImage('Utils/BlockIcon/dot_matrix.png', 30, 30, {
          alt: '*',
          flipRtl: 'FALSE',
        }),
      )
      .appendField('Ma trận Led ở')
      .appendField(
        new Blockly.FieldDropdown([
          ['Port 1', 'Port 1'],
          ['Port 2', 'Port 2'],
          ['Port 3', 'Port 3'],
          ['Port 4', 'Port 4'],
        ]),
        'Port',
      )
      .appendField(' hiển thị ')
      .appendField(
        new Blockly.FieldDropdown([
          [
            {
              src: 'Utils/BlockIcon/arrow_l2r.png',
              width: 15,
              height: 15,
              alt: '*',
            },
            'arrowl2r',
          ],
          [
            {
              src: 'Utils/BlockIcon/arrow_r2l.png',
              width: 15,
              height: 15,
              alt: '*',
            },
            'arrowr2l',
          ],
          [
            {
              src: 'Utils/BlockIcon/arrow_up.png',
              width: 15,
              height: 15,
              alt: '*',
            },
            'arrow_up',
          ],
          [
            {
              src: 'Utils/BlockIcon/arrow_down.png',
              width: 15,
              height: 15,
              alt: '*',
            },
            'arrow_down',
          ],
          [
            {
              src: 'Utils/BlockIcon/heart.png',
              width: 15,
              height: 15,
              alt: '*',
            },
            'heart',
          ],
          [
            {
              src: 'Utils/BlockIcon/smile.png',
              width: 15,
              height: 15,
              alt: '*',
            },
            'smile',
          ],
          [
            {
              src: 'Utils/BlockIcon/cute_star.png',
              width: 15,
              height: 15,
              alt: '*',
            },
            'star',
          ],
          [
            {
              src: 'Utils/BlockIcon/effect_1.gif',
              width: 15,
              height: 15,
              alt: '*',
            },
            'effect_1',
          ],
          [
            {
              src: 'Utils/BlockIcon/effect_2.gif',
              width: 15,
              height: 15,
              alt: '*',
            },
            'effect_2',
          ],
          [
            {
              src: 'Utils/BlockIcon/effect_3.gif',
              width: 15,
              height: 15,
              alt: '*',
            },
            'effect_3',
          ],
        ]),
        'NAME',
      )
      .appendField('trong')
      .appendField(new CustomFields.FieldCalculate(0, 0, 255, 1), 'Duration')
      .appendField('giây');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip('');
    this.setHelpUrl('');
  },
};

Blockly.Blocks['turnoffledrbg'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(
        new Blockly.FieldImage('Utils/BlockIcon/rgb_led.png', 30, 30, {
          alt: '*',
          flipRtl: 'FALSE',
        }),
      )
      .setAlign(Blockly.ALIGN_CENTRE)
      .appendField('Leb RBG')
      .appendField(
        new Blockly.FieldImage('Utils/BlockIcon/light_on.png', 30, 30, {
          alt: '*',
          flipRtl: 'FALSE',
        }),
      )
      .appendField(
        new Blockly.FieldImage('Utils/BlockIcon/arrow_l2r.png', 30, 30, {
          alt: '*',
          flipRtl: 'FALSE',
        }),
      )
      .appendField(
        new Blockly.FieldImage('Utils/BlockIcon/light_off.png', 30, 30, {
          alt: '*',
          flipRtl: 'FALSE',
        }),
      );
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip('');
    this.setHelpUrl('');
  },
};

Blockly.Blocks['ringled'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(
        new Blockly.FieldImage('Utils/BlockIcon/ring_led.png', 30, 30, {
          alt: '*',
          flipRtl: 'FALSE',
        }),
      )
      .appendField('Ring Led ở')
      .appendField(
        new Blockly.FieldDropdown([
          ['Port 1', 'Port 1'],
          ['Port 2', 'Port 2'],
          ['Port 3', 'Port 3'],
          ['Port 5', 'Port 5'],
        ]),
        'ringLedModule',
      )
      .appendField('phát sáng như')
      .appendField(new CustomFields.FieldRing(), 'LED');
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip('');
    this.setHelpUrl('');
  },
};

Blockly.Blocks['servo'] = {
  init: function () {
    this.appendDummyInput()
      .appendField('Servo')
      .appendField(
        new Blockly.FieldDropdown([
          [
            {
              src: 'Utils/BlockIcon/left_servo.png',
              width: 15,
              height: 15,
              alt: '*',
            },
            'Servo_1',
          ],
          [
            {
              src: 'Utils/BlockIcon/right_servo.png',
              width: 15,
              height: 15,
              alt: '*',
            },
            'Servo_2',
          ],
          [
            {
              src: 'Utils/BlockIcon/both_servo.png',
              width: 15,
              height: 15,
              alt: '*',
            },
            'Both',
          ],
        ]),
        'Servo_Select',
      )
      .appendField('quay tới góc')
      .appendField(new Blockly.FieldAngle(90), 'Angle');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(165);
    this.setTooltip('');
    this.setHelpUrl('');
  },
};

Blockly.Blocks['motorselect'] = {
  init: function () {
    this.appendDummyInput()
      .appendField('Motor')
      .appendField(
        new Blockly.FieldDropdown([
          [
            {
              src: 'Utils/BlockIcon/left_motor.png',
              width: 15,
              height: 15,
              alt: '*',
            },
            'Left',
          ],
          [
            {
              src: 'Utils/BlockIcon/right_motor.png',
              width: 15,
              height: 15,
              alt: '*',
            },
            'Right',
          ],
          [
            {
              src: 'Utils/BlockIcon/both_motor.png',
              width: 15,
              height: 15,
              alt: '*',
            },
            'Both',
          ],
        ]),
        'MotorSelect',
      )
      .appendField('quay với vận tốc')
      .appendField(new CustomFields.FieldVelocity(1, 1, 255, 1), 'velocity');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(90);
    this.setTooltip('');
    this.setHelpUrl('');
  },
};

Blockly.Blocks['two_motor'] = {
  init: function () {
    this.appendDummyInput()
      .appendField('Motor trái')
      .appendField(
        new Blockly.FieldImage('Utils/BlockIcon/left_motor.png', 15, 15, {
          alt: '*',
          flipRtl: 'FALSE',
        }),
      )
      .appendField('tốc độ')
      .appendField(new CustomFields.FieldVelocity(1, 1, 255, 1), 'LeftVel')
      .appendField('%, thời gian ');
    this.appendValueInput('LeftDuration');
    this.appendDummyInput()
      .appendField('Motor phải')
      .appendField(
        new Blockly.FieldImage('Utils/BlockIcon/right_motor.png', 15, 15, {
          alt: '*',
          flipRtl: 'FALSE',
        }),
      )
      .appendField('tốc độ')
      .appendField(new CustomFields.FieldVelocity(1, 1, 255, 1), 'RightVel')
      .appendField('% thời gian');
    this.appendValueInput('RightDuration');
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(290);
    this.setTooltip('');
    this.setHelpUrl('');
  },
};

Blockly.Blocks['srf05'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(
        new Blockly.FieldImage('Utils/BlockIcon/object_sensor.png', 30, 30, {
          alt: '*',
          flipRtl: 'FALSE',
        }),
      )
      .appendField('Khoảng cách tới vật cản đo được sử dụng cảm biến ở')
      .appendField(
        new Blockly.FieldDropdown([
          ['Port 1', 'Port 1'],
          ['Port 2', 'Port 2'],
          ['Port 3', 'Port 3'],
          ['Port 4', 'Port 4'],
        ]),
        'port',
      );
    this.setOutput(true, null);
    this.setColour(180);
    this.setTooltip('');
    this.setHelpUrl('');
  },
};

Blockly.Blocks['light_sensor'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(
        new Blockly.FieldImage('Utils/BlockIcon/light_sensor.png', 30, 30, {
          alt: '*',
          flipRtl: 'FALSE',
        }),
      )
      .appendField('Cường độ ánh sáng đo được sử dụng cảm biến ở')
      .appendField(
        new Blockly.FieldDropdown([
          ['Port 1', 'Port 1'],
          ['Port 2', 'Port 2'],
          ['Port 3', 'Port 3'],
          ['Port 5', 'Port 5'],
        ]),
        'Port',
      );
    this.setOutput(true, null);
    this.setColour(230);
    this.setTooltip('');
    this.setHelpUrl('');
  },
};

Blockly.Blocks['colorsensor'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(
        new Blockly.FieldImage('Utils/BlockIcon/color_sensor.png', 30, 30, {
          alt: '*',
          flipRtl: 'FALSE',
        }),
      )
      .appendField('Màu sắc được xác định bằng cảm biến ở')
      .appendField(
        new Blockly.FieldDropdown([
          ['Port 1', 'Port 1'],
          ['Port 2', 'Port 2'],
          ['Port 3', 'Port 3'],
          ['Port 6', 'Port 6'],
        ]),
        'Port',
      );
    this.setOutput(true, null);
    this.setColour(75);
    this.setTooltip('');
    this.setHelpUrl('');
  },
};

Blockly.Blocks['sound_sensor'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(
        new Blockly.FieldImage('Utils/BlockIcon/sound_sensor.png', 30, 30, {
          alt: '*',
          flipRtl: 'FALSE',
        }),
      )
      .appendField('Âm thanh được cảm nhận bằng cảm biến ở')
      .appendField(
        new Blockly.FieldDropdown([
          ['Port 1', 'Port 1'],
          ['Port 2', 'Port 2'],
          ['Port 3', 'Port 3'],
          ['Port 7', 'Port 7'],
        ]),
        'Port',
      )
      .appendField('để phát hiện âm thanh');
    this.setOutput(true, null);
    this.setColour(230);
    this.setTooltip('');
    this.setHelpUrl('');
  },
};

Blockly.Blocks['path_detecter'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(
        new Blockly.FieldImage('Utils/BlockIcon/path_sensor.png', 30, 30, {
          alt: '*',
          flipRtl: 'FALSE',
        }),
      )
      .appendField('Hành trình đi được đo bằng cảm biến ở')
      .appendField(
        new Blockly.FieldDropdown([
          ['Port 1', 'Port 1'],
          ['Port 2', 'Port 2'],
          ['Port 3', 'Port 3'],
          ['Port 8', 'Port 8'],
        ]),
        'Port',
      );
    this.appendDummyInput()
      .appendField('theo chiều')
      .appendField(
        new Blockly.FieldDropdown([
          ['bên trái', 'bên trái'],
          ['bên phải', 'bên phải'],
        ]),
        'side',
      )
      .appendField('với màu sắc')
      .appendField(
        new Blockly.FieldDropdown([
          ['màu trắng', 'màu trắng'],
          ['màu đen', 'màu đen'],
        ]),
        'color',
      );
    this.setOutput(true, null);
    this.setColour(60);
    this.setTooltip('');
    this.setHelpUrl('');
  },
};

Blockly.Blocks['dummy_start_block'] = {
  init: function () {
    this.appendDummyInput()
      .setAlign(Blockly.ALIGN_CENTRE)
      .appendField('Nhấn nút')
      .appendField(
        new Blockly.FieldImage('Utils/Icon/png/Start.png', 50, 50, {
          alt: '*',
          flipRtl: 'FALSE',
        }),
      )
      .appendField('để bắt đầu chương trình');
    this.setInputsInline(true);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip('');
    this.setHelpUrl('');
    this.setDeletable(false);
    this.setMovable(false);
  },
};

Blockly.Blocks['dummy_play_block'] = {
  init: function () {
    this.appendDummyInput()
      .setAlign(Blockly.ALIGN_CENTRE)
      .appendField('Nhấn nút')
      .appendField(
        new Blockly.FieldImage('Utils/Icon/png/Start.png', 50, 50, {
          alt: '*',
          flipRtl: 'FALSE',
        }),
      )
      .appendField('để bắt đầu chương trình');
    this.setInputsInline(true);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip('');
    this.setHelpUrl('');
    this.setDeletable(false);
    this.setMovable(false);
  },
};

Blockly.Blocks['if_block'] = {
  init: function () {
    this.appendValueInput('condition').setCheck('Boolean').appendField('Nếu');
    this.appendStatementInput('if block')
      .setCheck(null)
      .setAlign(Blockly.ALIGN_CENTRE)
      .appendField('Đúng thì');
    this.appendStatementInput('else block')
      .setCheck(null)
      .appendField('Sai thì');
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(75);
    this.setTooltip('');
    this.setHelpUrl('');
  },
};

Blockly.Blocks['if1'] = {
  init: function () {
    this.appendValueInput('condition').setCheck('Boolean').appendField('Nếu');
    this.appendStatementInput('command').setCheck(null).appendField('Đúng thì');
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(315);
    this.setTooltip('');
    this.setHelpUrl('');
  },
};

Blockly.Blocks['break_continue_loop'] = {
  init: function () {
    this.appendDummyInput().appendField(
      new Blockly.FieldDropdown([
        ['nhảy vòng lặp', 'nhảy vòng lặp'],
        ['thoát vòng lặp', 'thoát vòng lặp'],
      ]),
      'action',
    );
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(330);
    this.setTooltip('');
    this.setHelpUrl('');
  },
};

Blockly.Blocks['loop'] = {
  init: function () {
    this.appendStatementInput('command')
      .setCheck(null)
      .appendField('Thực hiện');
    this.appendDummyInput()
      .appendField('lặp lại')
      .appendField(new CustomFields.FieldCalculate(0, 0, 100, 1), 'NAME')
      .appendField('lần');
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(285);
    this.setTooltip('');
    this.setHelpUrl('');
  },
};

Blockly.Blocks['stop_move'] = {
  init: function () {
    this.appendDummyInput().appendField('Dừng động cơ');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(0);
    this.setTooltip('');
    this.setHelpUrl('');
  },
};

Blockly.Blocks['create_function'] = {
  init: function () {
    this.appendDummyInput()
      .appendField('Để')
      .appendField(new Blockly.FieldTextInput('di chuyển'), 'Function_name');
    this.appendStatementInput('NAME').setCheck(null);
    this.setColour(230);
    this.setTooltip('');
    this.setHelpUrl('');
  },
};

Blockly.Blocks['test_pitch_field'] = {
  init: function () {
    this.appendDummyInput()
      .appendField('pitch')
      .appendField(new CustomFields.FieldPitch('7'), 'PITCH');
    this.setStyle('loop_blocks');
  },
};

Blockly.Blocks['while'] = {
  init: function () {
    // this.appendValueInput("condition")
    //     .setCheck("Boolean")
    //     .appendField("Khi mà");
    this.appendStatementInput('actions')
      .setCheck(null)
      .appendField('Thực hiện liên tục');
    this.setColour(285);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('');
    this.setHelpUrl('');
  },
};

Blockly.Blocks['test_cal_field'] = {
  init: function () {
    this.appendDummyInput().appendField(
      new CustomFields.FieldCalculate(0, 0, 1000, 1),
      'NAME',
    );
    this.setColour(285);
  },
};

Blockly.Blocks['test_vel_field'] = {
  init: function () {
    this.appendDummyInput().appendField(
      new CustomFields.FieldVelocity(0, 0, 1000, 1),
      'NAME',
    );
    this.setColour(285);
  },
};

Blockly.Blocks['field_matrix'] = {
  init: function () {
    this.appendDummyInput().appendField(
      new CustomFields.FieldMatrix(1, 16),
      'NAME',
    );
    this.setColour(285);
  },
};

Blockly.Blocks['field_ring'] = {
  init: function () {
    this.appendDummyInput().appendField(new CustomFields.FieldRing(), 'NAME');
    this.setColour(285);
  },
};

Blockly.Blocks['relay'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(
        new Blockly.FieldImage('Utils/BlockIcon/relay.png', 30, 30, {
          alt: '*',
          flipRtl: 'FALSE',
        }),
      )
      .appendField('Điều khiển Replay')
      .appendField(
        new Blockly.FieldDropdown([
          ['Đóng', 'true'],
          ['Mở', 'false'],
        ]),
        'replayState',
      )
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(135);
    this.setTooltip('');
    this.setHelpUrl('');
  },
};

Blockly.Blocks['single_led'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(
        new Blockly.FieldImage('Utils/BlockIcon/rgb_led.png', 30, 30, {
          alt: '*',
          flipRtl: 'FALSE',
        }),
      )
      .appendField('Điều khiển Led')
      .appendField(
        new Blockly.FieldDropdown([
          [
            {
              src: 'Utils/BlockIcon/light_on.png',
              width: 30,
              height: 30,
              alt: 'Bật',
            },
            'true',
          ],
          [
            {
              src: 'Utils/BlockIcon/light_off.png',
              width: 30,
              height: 30,
              alt: 'Tắt',
            },
            'false',
          ],
        ]),
        'singleLedState',
      )
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(135);
    this.setTooltip('');
    this.setHelpUrl('');
  },
};

Blockly.Blocks['traffic_light'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(
        new Blockly.FieldImage('Utils/BlockIcon/rgb_led.png', 30, 30, {
          alt: '*',
          flipRtl: 'FALSE',
        }),
      )
      .appendField('Điều khiển đèn giao thông')
      .appendField(new CustomFields.FieldTrafficLight(), 'Lights')
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(135);
    this.setTooltip('');
    this.setHelpUrl('');
  },
};

Blockly.Blocks['keyboard'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(
        new Blockly.FieldImage('Utils/BlockIcon/sound_sensor.png', 30, 30, {
          alt: '*',
          flipRtl: 'FALSE',
        }),
      )
      .appendField('Nút')
      .appendField(
        new CustomFields.FieldKeyboard(),
        'Key',
      )
      .appendField('được bấm');
    this.setOutput(true, null);
    this.setColour(230);
    this.setTooltip('');
    this.setHelpUrl('');
  },
};

Blockly.Blocks['calculator'] = {
  init: function () {
    this.appendDummyInput().appendField(new CustomFields.FieldCalculate(1, 0, 1000, 1), 'Value');
    this.setOutput(true, null);
    this.setColour(230);
    this.setTooltip('');
    this.setHelpUrl('');
  },
};

Blockly.Blocks['wait_until'] = {
  init: function () {
    this.appendValueInput("condition")
      .appendField("Chờ đến khi")
      .setCheck("Boolean");
    this.setColour(285);
    // this.setOutput(true, null);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    // this.setInputsInline(false, null);
    this.setTooltip('');
    this.setHelpUrl('');
  },
};
