// map process.env.NEXT_PUBLIC_* to publicRuntimeConfig so it is available at runtime.
const nextPublicEnv = Object.fromEntries(
                    Object.entries(process.env).filter(
                        ([key]) => key.startsWith('NEXT_PUBLIC_')
                        )
                    );

module.exports = {
    publicRuntimeConfig: nextPublicEnv
};