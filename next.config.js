const nextPublic = Object.fromEntries(
                    Object.entries(process.env).filter(
                        ([key]) => key.startsWith('NEXT_PUBLIC_')
                        )
                    );

module.exports = {
    publicRuntimeConfig: nextPublic
};