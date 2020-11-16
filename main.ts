let Buffy = sprites.create(img`
    ..22422222242442....
    .2242222244224422...
    244422444dd4422444..
    4224224ddccccd4244..
    422444dccccccccc424.
    4224dfffccccfffc424.
    4244df98cccc89fc424.
    4242df17cccc71fc424.
    4242df17cddc71fc422.
    4242dccccccccccc4222
    424dcccceeeccccd4444
    424ddccccccccdd42244
    242244fffffffff24ff4
    f2424655555555fc4cff
    fcddf655555555fddcf.
    fffffffffffffffffff.
    ..fbbbbbbbbbbbbf....
    ..fffffbbbbfffff....
    ..faaaaffffaaaaf....
    ..ffffff..ffffff....
    `, SpriteKind.Player)
controller.moveSprite(Buffy)
scene.setBackgroundImage(img`
    
    `)
scene.cameraFollowSprite(Buffy)
