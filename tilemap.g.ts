// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`1000100001010101010101010100010101010101000000010000000000000101010101010000000000000000000001010100000001000001010000000000000000000001010000000100010100000101010101010101000101000000000000000001000101010101000000010100000000000001010000000000000000000101000001010100000000010100000001010100000101000001010000000001010101000001000000010100000000000000010001010001010101010101010001000100000100010101010000000000000001000001000101010000000000000101010100020001010100000101010101010101010101010101000001010101010101010101`, img`
2 2 2 2 2 2 2 2 2 . 2 2 2 2 2 2 
. . . 2 . . . . . . 2 2 2 2 2 2 
. . . . . . . . . . 2 2 2 . . . 
2 . . 2 2 . . . . . . . . . . 2 
2 . . . 2 . 2 2 . . 2 2 2 2 2 2 
2 2 . 2 2 . . . . . . . . 2 . 2 
2 2 2 2 . . . 2 2 . . . . . . 2 
2 . . . . . . . . . 2 2 . . 2 2 
2 . . . . 2 2 . . . 2 2 2 . . 2 
2 . . 2 2 . . . . 2 2 2 2 . . 2 
. . . 2 2 . . . . . . . 2 . 2 2 
. 2 2 2 2 2 2 2 2 . 2 . 2 . . 2 
. 2 2 2 2 . . . . . . . 2 . . 2 
. 2 2 2 . . . . . . 2 2 2 2 . . 
. 2 2 2 . . 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 . . 2 2 2 2 2 2 2 2 2 2 
`, [myTiles.transparency16,sprites.castle.tileGrass2,sprites.builtin.forestTiles0], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
