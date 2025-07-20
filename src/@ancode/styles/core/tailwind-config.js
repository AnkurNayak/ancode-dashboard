function twVariantGroups(){
    return {
        name : 'ancode-tailwind-extracted-config',
        transform(code){
            classNameMatches.foreach(([matchStr, className])=>{
                const parsedClasses = parseVariants(className);
                code = code.replace(matchStr, parsedClasses)
            });
            return code
        }
    }
}