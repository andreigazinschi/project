namespace SpriteKind {
    export const Special = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Special, function (sprite, otherSprite) {
    otherSprite.destroy(effects.confetti, 200)
    info.changeScoreBy(5)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    otherSprite.destroy(effects.disintegrate, 200)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
    otherSprite.destroy(effects.fire, 200)
})
info.onLifeZero(function () {
    game.over(false, effects.slash)
})
let Golden_Apple: Sprite = null
let Bomb: Sprite = null
let Watermelom: Sprite = null
scene.setBackgroundColor(11)
let Knife = sprites.create(img`
. . . . . . . . . . 1 1 1 
. . . . . . . . . 1 1 1 1 
. . . . . . . . 1 1 1 1 1 
. . . . . . . 1 1 1 1 1 . 
. . . . . . 1 1 1 1 1 . . 
. . . . . 1 1 1 1 1 . . . 
. . . . 1 1 1 1 1 . . . . 
. . . 1 1 1 1 1 . . . . . 
. . 1 1 1 1 1 . . . . . . 
. f f f 1 1 . . . . . . . 
f f f f 1 . . . . . . . . 
f f f f . . . . . . . . . 
f f f . . . . . . . . . . 
`, SpriteKind.Player)
controller.moveSprite(Knife, 110, 110)
Knife.setFlag(SpriteFlag.StayInScreen, true)
info.setScore(0)
info.setLife(3)
info.startCountdown(30)
game.onUpdateInterval(1150, function () {
    Watermelom = sprites.create(img`
. . . 7 f 7 f 7 f 7 . . . 
. . 7 7 f 7 f 7 f 7 7 . . 
. 7 7 7 f 7 f 7 f 7 7 7 . 
7 7 7 7 f 7 f 7 f 7 7 7 7 
7 7 7 f 7 7 f 7 7 f 7 7 7 
7 7 7 f 7 7 f 7 7 f 7 7 7 
7 7 7 f 7 7 f 7 7 f 7 7 7 
7 7 7 f 7 7 f 7 7 f 7 7 7 
7 7 7 f 7 7 f 7 7 f 7 7 7 
7 7 7 7 f 7 f 7 f 7 7 7 7 
. 7 7 7 f 7 f 7 f 7 7 7 . 
. . 7 7 f 7 f 7 f 7 7 . . 
. . . 7 f 7 f 7 f 7 . . . 
`, SpriteKind.Projectile)
    Watermelom.setVelocity(0, 65)
    Watermelom.setPosition(Math.randomRange(10, 150), 0)
})
game.onUpdateInterval(900, function () {
    Bomb = sprites.create(img`
. . . . . . . 1 2 . . 
. . . . . . 1 . . . . 
. . . . . 1 . . . . . 
. . f f f 1 f f f . . 
. f f f f f f f f f . 
f f f f f f f f f f f 
f f f f f f f f f f f 
f f f f f f f f f f f 
f f f f f f f f f f f 
f f f f f f f f f f f 
f f f f f f f f f f f 
f f f f f f f f f f f 
. f f f f f f f f f . 
. . f f f f f f f . . 
`, SpriteKind.Enemy)
    Bomb.setPosition(Math.randomRange(10, 150), 0)
    Bomb.setVelocity(0, 100)
})
game.onUpdateInterval(Math.randomRange(2000, 13000), function () {
    Golden_Apple = sprites.create(img`
. . . . f f . . . 
. . . . f . . . . 
. 5 5 5 5 5 5 5 . 
5 5 1 1 5 5 5 5 5 
5 5 1 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 
. 5 5 5 5 5 5 5 . 
`, SpriteKind.Special)
    Golden_Apple.setPosition(Math.randomRange(10, 150), 0)
    Golden_Apple.setVelocity(0, 100)
})
