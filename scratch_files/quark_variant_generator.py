def generate_variants(input_block, input_mod, variant_base, variant_list, variant_file, recipe_file):
    for variant, variant_mod in variant_list.items():
        variant_block = ""

        variant_name_prefix = variant[0]
        variant_name_suffix = variant[1]
        variant_type = variant[2]

        # Variants are included in vanilla and each mod can be expected to have them, or variants are all added by a specific mod
        if (len(variant_mod) == 1):
            if (variant_mod[0] == "minecraft"):
                variant_block = input_mod + ":"
            else:
                variant_block = variant_mod[0] + ":"
        # Supplementaries-specific variant options
        elif (variant_mod[1] == "supplementaries" or variant_mod[1] == "immersive_weathering"):
            if input_mod == "minecraft":
                variant_block = variant_mod[1] + ":"
            else:
                variant_block = variant_mod[1] + ":" + input_mod + "/"
        # Variants which are covered by everycomp
        # Third name is the everycomp alias
        elif (variant_mod[1] == "everycomp"):
            if input_mod == "minecraft" or input_mod == variant_mod[0]:
                variant_block = variant_mod[0] + ":"
            else:
                variant_block = "everycomp:" + variant_mod[2] + "/" + input_mod + "/"
            
        variant_output = variant_base
        if (variant_name_prefix != ""):
            variant_output = variant_name_prefix + "_" + variant_output
        if (variant_name_suffix != ""):
            variant_output = variant_output + "_" + variant_name_suffix
        variant_block += variant_output

        generate_single_variant(variant_type, input_block, variant_block, variant_file, recipe_file)

def generate_single_variant(variant_type, input_block, variant_block, variant_file, recipe_file):
    variant_file.write("\"" + variant_type + "," + input_block + "," + variant_block +"\",\n")
    recipe_file.write("\tevent.remove({output: '" + variant_block + "'})\n")
    

def main():
    variant_file = open("scratch_files/quark_variant_selector.txt", "w")
    variant_file.write("\"Manual Variants\" = [\n")
    
    recipe_file = open("kubejs/server_scripts/remove_variant_recipes.js", "w")
    recipe_file.write("ServerEvents.recipes(event => {\n")

    #=============================#
    # ------ Wood Variants ------ #
    #=============================#
    
    wood_types = {
        "oak":"minecraft",
        "spruce":"minecraft",
        "birch":"minecraft",
        "jungle":"minecraft",
        "acacia":"minecraft",
        "dark_oak":"minecraft",
        "crimson":"minecraft",
        "warped":"minecraft",
        "mangrove":"minecraft",
        "cherry":"minecraft",

        "blossom":"quark",
        "ancient":"quark",

        "fir":"biomesoplenty",
        "jacaranda":"biomesoplenty",
        "magic":"biomesoplenty",

        "baobab":"regions_unexplored",
        "blackwood":"regions_unexplored",
        "cypress":"regions_unexplored",
        "dead":"regions_unexplored",
        "eucalyptus":"regions_unexplored",
        "joshua":"regions_unexplored",
        "kapok":"regions_unexplored",
        "larch":"regions_unexplored",
        "palm":"regions_unexplored",
        "pine":"regions_unexplored",
        "redwood":"regions_unexplored",
        "willow":"regions_unexplored",
        "blue_bioshroom":"regions_unexplored",
        "green_biomshroom":"regions_unexplored",
        "pink_bioshroom":"regions_unexplored",
        
        "coconut":"ecologics",
        "walnut":"ecologics",
        "azalea":"ecologics",
        "flowering_azalea":"ecologics",

        "biomemakeover":"ancient_oak"
    }

    stem_types = [
        "crimson",
        "warped",
        "blue_bioshroom",
        "green_biomshroom",
        "pink_bioshroom"
    ]

    log_variants = {
        tuple(["","wood","slab"]):tuple(["minecraft"]),
        tuple(["","post","stairs"]):tuple(["quark", "everycomp", "q"]),
    }

    stripped_log_variants = {
        tuple(["stripped","wood","slab"]):tuple(["minecraft"]),
        tuple(["","beam","stairs"]):tuple(["decorative_blocks", "everycomp", "db"]),
        tuple(["","palisade","fence"]):tuple(["decorative_blocks", "everycomp", "db"]),
        tuple(["stripped","post","pillar"]):tuple(["quark", "everycomp", "q"]),
    }

    plank_variants = {
        tuple(["vertical","planks","pillar"]):tuple(["quark", "everycomp", "q"])
    }

    for wood, wood_mod in wood_types.items():
        # Log types
        log_block = wood_mod + ":" + wood

        stripped_log_block = wood_mod + ":stripped_" + wood
        if (wood in stem_types):
            log_block += "_stem"
            stripped_log_block += "_stem"
        else:
            log_block += "_log"
            stripped_log_block += "_log"

        generate_variants(log_block, wood_mod, wood, log_variants, variant_file, recipe_file)
        generate_variants(stripped_log_block, wood_mod, wood, stripped_log_variants, variant_file, recipe_file)

        # Plank types
        plank_block = wood_mod + ":" + wood + "_planks"
        generate_variants(plank_block, wood_mod, wood, plank_variants, variant_file, recipe_file)
    
    # One-offs
    generate_single_variant("fence", "minecraft:oak_log", "regions_unexplored:small_oak_log", variant_file, recipe_file)
    generate_single_variant("unique", "minecraft:stripped_oak_log", "regions_unexplored:stripped_small_oak_log", variant_file, recipe_file)

    generate_single_variant("slab", "minecraft:crimson_stem", "minecraft:crimson_hyphae", variant_file, recipe_file)
    generate_single_variant("slab", "minecraft:warped_stem", "minecraft:warped_hyphae", variant_file, recipe_file)
    generate_single_variant("slab", "regions_unexplored:blue_bioshroom_stem", "regions_unexplored:blue_bioshroom_hyphae", variant_file, recipe_file)
    generate_single_variant("slab", "regions_unexplored:green_bioshroom_stem", "regions_unexplored:green_bioshroom_hyphae", variant_file, recipe_file)
    generate_single_variant("slab", "regions_unexplored:pink_bioshroom_stem", "regions_unexplored:pink_bioshroom_hyphae", variant_file, recipe_file)

    generate_single_variant("slab", "minecraft:stripped_crimson_stem", "minecraft:stripped_crimson_hyphae", variant_file, recipe_file)
    generate_single_variant("slab", "minecraft:stripped_warped_stem", "minecraft:stripped_warped_hyphae", variant_file, recipe_file)
    generate_single_variant("slab", "regions_unexplored:stripped_blue_bioshroom_stem", "regions_unexplored:stripped_blue_bioshroom_hyphae", variant_file, recipe_file)
    generate_single_variant("slab", "regions_unexplored:stripped_green_bioshroom_stem", "regions_unexplored:stripped_green_bioshroom_hyphae", variant_file, recipe_file)
    generate_single_variant("slab", "regions_unexplored:stripped_pink_bioshroom_stem", "regions_unexplored:stripped_pink_bioshroom_hyphae", variant_file, recipe_file)

    #=============================#
    # ------ Leaf Variants ------ #
    #=============================#
    
    leaf_types = {
        "oak":"minecraft",
        "spruce":"minecraft",
        "birch":"minecraft",
        "jungle":"minecraft",
        "acacia":"minecraft",
        "dark_oak":"minecraft",
        "mangrove":"minecraft",
        "cherry":"minecraft",
        "azalea":"minecraft",
        "flowering_azalea":"minecraft",

        "blue_blossom":"quark",
        "purple_blossom":"quark",
        "orange_blossom":"quark",
        "yellow_blossom":"quark",
        "red_blossom":"quark",
        "ancient":"quark",

        "fir":"biomesoplenty",
        "jacaranda":"biomesoplenty",
        "magic":"biomesoplenty",
        "flowering_oak":"biomesoplenty",
        "snowblossom":"biomesoplenty",
        "rainbow_birch":"biomesoplenty",
        "yellow_autumn":"biomesoplenty",
        "orange_autumn":"biomesoplenty",
        "red_autumn":"biomesoplenty",
        "maple":"biomesoplenty",

        "baobab":"regions_unexplored",
        "blackwood":"regions_unexplored",
        "cypress":"regions_unexplored",
        "dead":"regions_unexplored",
        "eucalyptus":"regions_unexplored",
        "joshua":"regions_unexplored",
        "kapok":"regions_unexplored",
        "larch":"regions_unexplored",
        "palm":"regions_unexplored",
        "pine":"regions_unexplored",
        "redwood":"regions_unexplored",
        "willow":"regions_unexplored",
        "bamboo":"regions_unexplored",
        "dead_pine":"regions_unexplored",
        "flowering":"regions_unexplored",
        "golden_larch":"regions_unexplored",
        "small_oak":"regions_unexplored",
        
        "coconut":"ecologics",
        "walnut":"ecologics",

        "biomemakeover":"ancient_oak"
    }

    leaf_variants = {
        tuple(["","hedge","slab"]):tuple(["quark", "everycomp", "q"]),
        tuple(["","leaf_pile","stairs"]):tuple(["immersive_weathering", "immersive_weathering"]),
    }

    for leaf, leaf_mod in leaf_types.items():
        leaf_block = leaf_mod + ":" + leaf + "_leaves"
        generate_variants(leaf_block, leaf_mod, leaf, leaf_variants, variant_file, recipe_file)

    #================================#
    # ------ Colored Variants ------ #
    #================================#
        
    colors = [
        "white",
        "light_gray",
        "gray",
        "black",
        "brown",
        "red",
        "orange",
        "yellow",
        "lime",
        "green",
        "cyan",
        "light_blue",
        "blue",
        "purple",
        "magenta",
        "pink"
    ]

    #=============================#
    # ------ Misc Variants ------ #
    #=============================#
    
    generate_single_variant("fence", "supplementaries:daub_frame", "supplementaries:daub_brace", variant_file, recipe_file)
    generate_single_variant("pillar", "supplementaries:daub_frame", "supplementaries:daub_cross_brace", variant_file, recipe_file)
    
    generate_single_variant("slab", "supplementaries:timber_frame", "supplementaries:timber_brace", variant_file, recipe_file)
    generate_single_variant("stairs", "supplementaries:timber_frame", "supplementaries:timber_cross_brace", variant_file, recipe_file)
    
    generate_single_variant("slab", "suppsquared:metal_frame", "suppsquared:metal_brace", variant_file, recipe_file)
    generate_single_variant("stairs", "suppsquared:metal_frame", "suppsquared:metal_cross_brace", variant_file, recipe_file)
    
    generate_single_variant("slab", "minecraft:iron_bars", "supplementaries:iron_gate", variant_file, recipe_file)
    
    #generate_single_variant("slab", "minecraft:rail", "little_logistics:switch_rail", variant_file, recipe_file)
    #generate_single_variant("stairs", "minecraft:rail", "little_logistics:tee_junction_rail", variant_file, recipe_file)
    #generate_single_variant("fence", "minecraft:rail", "little_logistics:junction_rail", variant_file, recipe_file)
    
    #generate_single_variant("slab", "little_logistics:automatic_switch_rail", "little_logistics:automatic_tee_junction_rail", variant_file, recipe_file)

    recipe_file.write("\tevent.remove({output: '/.*stairs.*/'})\n")
    recipe_file.write("\tevent.remove({output: '/.*slab.*/'})\n")
    recipe_file.write("\tevent.remove({output: '/.*fence.*/'})\n")
    recipe_file.write("\tevent.remove({output: '/.*:(?!paper_).*wall.*/'})\n")
    recipe_file.write("\tevent.remove({output: '/.*fence_gate.*/'})\n")
    recipe_file.write("\tevent.remove({output: '/.*carpet.*/'})\n")
    recipe_file.write("\tevent.remove({output: '/.*pane.*/'})\n")
    recipe_file.write("\tevent.remove({output: '/.*railing.*/'})\n")

    variant_file.write("]\n")
    variant_file.close()
    
    recipe_file.write("})")
    recipe_file.close()

if __name__ == "__main__":
    main()