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
        elif (variant_mod[1] == "supplementaries"):
            if input_mod == "minecraft":
                variant_block = "supplementaries:"
            else:
                variant_block = "supplementaries:" + input_mod + "/"
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
    }

    stem_types = [
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
    generate_single_variant("slab", "regions_unexplored:blue_bioshroom_stem", "regions_unexplored:blue_bioshroom_hyphae", variant_file, recipe_file)
    generate_single_variant("slab", "regions_unexplored:green_bioshroom_stem", "regions_unexplored:green_bioshroom_hyphae", variant_file, recipe_file)
    generate_single_variant("slab", "regions_unexplored:pink_bioshroom_stem", "regions_unexplored:pink_bioshroom_hyphae", variant_file, recipe_file)

    generate_single_variant("slab", "regions_unexplored:stripped_blue_bioshroom_stem", "regions_unexplored:stripped_blue_bioshroom_hyphae", variant_file, recipe_file)
    generate_single_variant("slab", "regions_unexplored:stripped_green_bioshroom_stem", "regions_unexplored:stripped_green_bioshroom_hyphae", variant_file, recipe_file)
    generate_single_variant("slab", "regions_unexplored:stripped_pink_bioshroom_stem", "regions_unexplored:stripped_pink_bioshroom_hyphae", variant_file, recipe_file)

    recipe_file.write("\tevent.remove({output: '/.*stairs.*/'})\n")
    recipe_file.write("\tevent.remove({output: '/.*slab.*/'})\n")
    recipe_file.write("\tevent.remove({output: '/.*fence.*/'})\n")
    recipe_file.write("\tevent.remove({output: '/.*wall.*/'})\n")
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