const TheEndGatewayBlockEntity = Java.loadClass("net.minecraft.world.level.block.entity.TheEndGatewayBlockEntity")

ForgeEvents.onEvent("net.minecraftforge.event.entity.player.PlayerEvent$PlayerChangedDimensionEvent", event => {
    const player = event.entity

    if (event.entity.level.dimension == "minecraft:the_end" && !player.persistentData.getBoolean("end_spawned")) { 
        player.persistentData.putBoolean("end_spawned", true);
        
        let blockstate = Blocks.END_GATEWAY.defaultBlockState()
        let pos = event.entity.blockPosition()
        TheEndGatewayBlockEntity.teleportEntity(event.entity.level, pos, blockstate, event.entity, new TheEndGatewayBlockEntity(pos, blockstate))
    }
})