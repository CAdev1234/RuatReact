module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        c_1564C0: '#1564C0',
        c_2A7BD9: '#2A7BD9',
        c_7EAFE8: '#7EAFE8',
        c_F8F9FB: '#F8F9FB',
        c_E8EBF1: '#E8EBF1',
        c_BCC3CF: '#BCC3CF',
        c_E5BE3D: '#E5BE3D',
        c_A6A6A6: '#A6A6A6',
        c_C85151: '#C85151',
        c_6E7582: '#6E7582',
        c_d6d6d6: '#d6d6d6',
        c_64A879: '#64A879',
        c_50BC2E: '#50BC2E',
        c_E4BE64: '#E4BE64',
        c_BCCF4A: '#BCCF4A',
        c_F2F2F2: '#F2F2F2',
        c_C8C8C8: '#C8C8C8',
        c_EBE188: '#EBE188',
        c_F17A13: '#F17A13',
        
      },

      boxShadow: {
        'card': '0px 1px 3px #d6d6d6'
      },
      fontSize: {
        '22px': '22px',
        '64px': '64px',
        '120px': '120px',
        '200px': '200px'
      },
      
      margin: {
        '2_5': '10px',
        '7_5': '30px',
        '12_5': '50px',
        '15': '60px',
        '17_5': '70px',
        '22_5': '90px',
        '25': '100px',
        '30': '120px',
        '31': '124px',
        '44': '132px',
        '172': '172px',
        '86': '344px'
      },
      padding: {
        '4_5': '18px',
        '7_5': '30px',
        '12_5': '50px',
        '15': '60px',
        '17_5': '70px',
        '22_5': '90px',
        '25': '100px',
        '43': '172px',
        '75': '300px'
      },
      height: {
        '2_5': '10px',
        '3_5': '14px',
        '5_5': '22px',
        '7_5': '30px',
        '11_5': '46px',
        '12_5': '50px',
        '15': '60px',
        '33': '132px'
      },
      width: {
        '2_5': '10px',
        '3_5': '14px',
        '11_5': '46px',
        '12_5': '50px',
        '22_5': '90px',
        '25': '100px',
        '30': '120px',
        '31_5': '136px',
        '50': '200px',
        '75': '300px',
        '81': '324px',
        '90': '360px',
        '100': '400px',
        '106_5': '426px',
        '125': '500px',
        '131_5': '526px',
        '144': '576px',
        '160': '560px',
        '146': '584px',
        '154_5': '618px',
        '162_5': '650px',
        '150vw': '150vw'
      }

    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
}
