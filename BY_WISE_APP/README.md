# BY WISE — Mobile App

This is the first native-app foundation for BY WISE, using React Native + Expo.

## Why this stack
- One codebase for iPhone and Android.
- Native mobile UI instead of wrapping the HTML page.
- Local persistence with AsyncStorage for the prototype.
- Easy migration of the existing recognition engine and BY WISE design system.

## Run
1. Install Node.js LTS.
2. In this folder run `npm install`.
3. Run `npx expo start`.
4. Open with Expo Go on iPhone/Android, or use an emulator.

## Migration plan
1. Native Home + Quick Record.
2. Port the audited recognition engine and Merchant Memory.
3. Native Edit Record + Calendar with arbitrary historical dates.
4. Native Reports + simplified All Time.
5. Native Budget + Profile + language/currency/theme.
6. QA on iPhone and Android.
7. Production build and store submission.

`BY_WISE_WEB_REFERENCE.html` is the current web reference and should remain unchanged while the native app is built.
