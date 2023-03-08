var Lesson = Lesson || Object.create(null);

Lesson = 
[
    [
        '<block type="dummy_play_block" x="400" y="50"></block>',

        '<block type="dummy_play_block" x="400" y="50"></block>' +
        '<block type="robot_move" x="450" y="200">'+
            '<field name="Direction">Tiến</field>'+
            '<field name="Velocity">10</field>' + 
            '<field name="Duration">1</field></block>',

        '<block type="dummy_play_block" x="400" y="50"></block>' +
        '<block type="robot_move" x="450" y="200">'+
            '<field name="Direction">Tiến</field>'+
            '<field name="Velocity">10</field>' + 
            '<field name="Duration">5</field></block>' + 
        '<block type="robot_move" x="400" y="300">'+
            '<field name="Direction">Lùi</field>'+
            '<field name="Velocity">10</field>' + 
            '<field name="Duration">1</field></block>',

        '<block type="dummy_play_block" x="400" y="50"></block>' +
        '<block type="robot_move" x="450" y="200">'+
            '<field name="Direction">Tiến</field>'+
            '<field name="Velocity">10</field>' + 
            '<field name="Duration">5</field></block>' + 
        '<block type="robot_move" x="400" y="300">'+
            '<field name="Direction">Lùi</field>'+
            '<field name="Velocity">10</field>' + 
            '<field name="Duration">1</field></block>',

        '<block type="dummy_play_block" x="400" y="50">' +
            '<next>' +
                '<block type="robot_move">'+
                    '<field name="Direction">Rẽ trái</field>'+
                    '<field name="Velocity">10</field>' + 
                    '<field name="Duration">1</field>' +
                    '<next>' + 
                        '<block type="robot_move">' +
                            '<field name="Direction">Rẽ phải</field>' +
                            '<field name="Velocity">10</field>' + 
                            '<field name="Duration">1</field>' +
                        '</block>' + 
                    '</next>' +
                '</block>' +
            '</next>' +
        '</block>' + 
        '<block type="robot_move" x="400" y="300">'+
            '<field name="Direction">Lùi</field>'+
            '<field name="Velocity">10</field>' + 
            '<field name="Duration">1</field>'+
        '</block>',

        '<block type="dummy_play_block" x="400" y="50">' +
            '<next>' +
                '<block type="robot_move">'+
                    '<field name="Direction">Rẽ trái</field>'+
                    '<field name="Velocity">10</field>' + 
                    '<field name="Duration">1</field>' +
                    '<next>' + 
                        '<block type="robot_move">' +
                            '<field name="Direction">Lùi</field>' +
                            '<field name="Velocity">10</field>' + 
                            '<field name="Duration">1</field>' +
                        '</block>' + 
                    '</next>' +
                '</block>' +
            '</next>' +
        '</block>' + 
        '<block type="robot_move" x="400" y="300">'+
            '<field name="Direction">Rẽ phải</field>'+
            '<field name="Velocity">10</field>' + 
            '<field name="Duration">1</field>'+
            '<next>' +
                '<block type="robot_move">' +
                    '<field name="Direction">Tiến</field>' +
                    '<field name="Velocity">10</field>' + 
                    '<field name="Duration">1</field>' +
                '</block>' + 
            '</next>' +
        '</block>',

        '<block type="dummy_play_block" x="400" y="50">' +
            '<next>' +
                '<block type="robot_move">'+
                    '<field name="Direction">Tiến</field>'+
                    '<field name="Velocity">10</field>' + 
                    '<field name="Duration">1</field>' +
                '</block>' +
            '</next>' +
        '</block>' + 
        '<block type="robot_move" x="400" y="300">'+
            '<field name="Direction">Tiến</field>'+
            '<field name="Velocity">10</field>' + 
            '<field name="Duration">1</field>'+
            '<next>' +
                '<block type="robot_move">' +
                    '<field name="Direction">Tiến</field>' +
                    '<field name="Velocity">10</field>' + 
                    '<field name="Duration">1</field>' +
                '</block>' + 
            '</next>' +
        '</block>',

        '<block type="dummy_play_block" x="400" y="50">' +
            '<next>' +
                '<block type="robot_move">'+
                    '<field name="Direction">Tiến</field>'+
                    '<field name="Velocity">10</field>' + 
                    '<field name="Duration">1</field>' +
                    '<next>' + 
                        '<block type="robot_move">' +
                            '<field name="Direction">Tiến</field>' +
                            '<field name="Velocity">10</field>' + 
                            '<field name="Duration">1</field>' +
                        '</block>' + 
                    '</next>' +
                '</block>' +
            '</next>' +
        '</block>' + 
        '<block type="robot_move" x="430" y="200">' +
            '<field name="Direction">Rẽ trái</field>' +
            '<field name="Velocity">10</field>' + 
            '<field name="Duration">1</field>' +
        '</block>' + 
        '<block type="robot_move" x="400" y="250">'+
            '<field name="Direction">Lùi</field>'+
            '<field name="Velocity">10</field>' + 
            '<field name="Duration">1</field>'+
            '<next>' +
                '<block type="robot_move">' +
                    '<field name="Direction">Lùi</field>' +
                    '<field name="Velocity">10</field>' + 
                    '<field name="Duration">1</field>' +
                '</block>' + 
            '</next>' +
        '</block>', 

        '<block type="dummy_play_block" x="400" y="50"></block>'
    ],
    [
        '<block type="dummy_play_block" x="400" y="50"></block>' +
        '<block type="playmusicnote" x="430" y="200">' +
            '<field name="Note">C</field><field name="Duration">1</field>' +
        '</block>',

        '<block type="dummy_play_block" x="400" y="50">' +
            '<next>' +
                '<block type="robot_move">'+
                    '<field name="Direction">Tiến</field>'+
                    '<field name="Velocity">10</field>' + 
                    '<field name="Duration">1</field>' +
                '</block>' +
            '</next>' +
        '</block>',

        '<block type="dummy_play_block" x="400" y="50">' +
            '<next>' +
                '<block type="robot_move">'+
                    '<field name="Direction">Tiến</field>'+
                    '<field name="Velocity">10</field>' + 
                    '<field name="Duration">1</field>' +
                    '<next>' +
                        '<block type="playmusicnote">' +
                            '<field name="Note">C</field><field name="Duration">1</field>' +
                        '</block>' +
                    '</next>' +
                '</block>' +
            '</next>' +
        '</block>',

        '<block type="dummy_play_block" x="400" y="50"></block>' +
        '<block type="rgb_led" x="430" y="200">' +
            '<field name="color_left">#ff0000</field>' + 
            '<field name="color_right">#ff0000</field>'+
            '<field name="duration">1</field>' +
        '</block>',

        '<block type="dummy_play_block" x="400" y="50">' +
            '<next>' + 
                '<block type="rgb_led">' +
                    '<field name="color_left">#ff0000</field>' + 
                    '<field name="color_right">#ff0000</field>'+
                    '<field name="duration">1</field>' +
                    '<next>' + 
                        '<block type="rgb_led" x="430" y="200">' +
                            '<field name="color_left">#ff0000</field>' + 
                            '<field name="color_right">#ff0000</field>'+
                            '<field name="duration">1</field>' +
                        '</block>' +
                    '</next>' +
                '</block>' +
            '</next>' +
        '</block>',

        '<block type="dummy_play_block" x="400" y="50">' +
            '<next>' + 
                '<block type="rgb_led">' +
                    '<field name="color_left">#ff0000</field>' + 
                    '<field name="color_right">#ff0000</field>'+
                    '<field name="duration">1</field>' +
                    '<next>' + 
                        '<block type="rgb_led" x="430" y="200">' +
                            '<field name="color_left">#000000</field>' + 
                            '<field name="color_right">#000000</field>'+
                            '<field name="duration">1</field>' +
                            '<next>' +
                                '<block type="rgb_led" x="430" y="200">' +
                                    '<field name="color_left">#ff0000</field>' + 
                                    '<field name="color_right">#ff0000</field>'+
                                    '<field name="duration">1</field>' +
                                    '<next>' +
                                        '<block type="rgb_led" x="430" y="200">' +
                                            '<field name="color_left">#000000</field>' + 
                                            '<field name="color_right">#000000</field>'+
                                            '<field name="duration">1</field>' +
                                        '</block>' +  
                                    '</next>' +
                                '</block>' +
                            '</next>' +    
                        '</block>' +
                    '</next>' +
                '</block>' +
            '</next>' +
        '</block>',

        '<block type="dummy_play_block" x="400" y="50">' +
            '<next>' + 
                '<block type="rgb_led">' +
                    '<field name="color_left">#ff0000</field>' + 
                    '<field name="color_right">#ff0000</field>'+
                    '<field name="duration">1</field>' +
                    '<next>' + 
                        '<block type="rgb_led">' +
                            '<field name="color_left">#000000</field>' + 
                            '<field name="color_right">#000000</field>'+
                            '<field name="duration">1</field>' +
                        '</block>' +
                    '</next>' +
                '</block>' +
            '</next>' +
        '</block>'
    ]
];
