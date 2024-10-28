sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    pizza.setPosition(randint(10, scene.screenWidth()), randint(10, scene.screenHeight()))
    info.startCountdown(5)
})
let pizza: Sprite = null
scene.setBackgroundColor(9)
let mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . a . . 7 7 . . a . . . . 
    . . . . a a a a a a a a . . . . 
    . . . . a a 9 a a 9 a a . . . . 
    . . . . a a a a a a a a . . . . 
    . . . . a a 4 4 4 4 a a . . . . 
    . . . . a a a a a a a a . . . . 
    . . . . . . 4 4 7 4 . . . . . . 
    . . . . 4 4 4 7 4 4 4 4 . . . . 
    . . . . . . 4 4 7 4 . . . . . . 
    . . . . 4 4 4 4 4 4 4 4 . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite)
pizza = sprites.create(img`
    . . . . . . b b b b . . . . . . 
    . . . . . . b 4 4 4 b . . . . . 
    . . . . . . b b 4 4 4 b . . . . 
    . . . . . b 4 b b b 4 4 b . . . 
    . . . . b d 5 5 5 4 b 4 4 b . . 
    . . . . b 5 5 5 5 5 4 e 4 4 b . 
    . . . b d 5 8 8 5 5 5 4 e 4 4 e 
    . . . b 5 5 8 8 5 5 5 5 e e e e 
    . . b d 5 5 5 5 5 5 5 5 5 e e e 
    . . b 5 2 2 2 5 5 8 8 5 5 d e e 
    . b 5 5 5 5 2 5 5 8 8 5 d d e 4 
    . b 5 5 2 2 2 5 5 5 5 d d e 4 . 
    b d 5 d 5 5 5 5 d d d 4 4 . . . 
    b 5 5 5 5 d d 4 4 4 4 . . . . . 
    4 d d d 4 4 4 . . . . . . . . . 
    4 4 4 4 . . . . . . . . . . . . 
    `, SpriteKind.Food)
