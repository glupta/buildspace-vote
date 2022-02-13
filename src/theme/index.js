import { extendTheme } from "@chakra-ui/react"

const theme = extendTheme({
  fonts: {
    heading: "Inter",
    body: "Inter",
    html:"Inter"
  },
    styles: {
        global: {
          'html, body': {
            color: '#0A152C',
            background: '#F1F6FC',
          
          },
        },
      },
    components: {
      Button: {
        color: "#0A152C",
        baseStyle: {
          fontWeight: "semibold", 
          color: "#0A152C",
          
          // Normally, it is "semibold"
        },
        // 2. We can add a new button size or extend existing
        sizes: {
          xl: {
            h: "56px",
            fontSize: "lg",
            px: "32px",
          },
        },
        // 3. We can add a new visual variant
        variants: {
          "with-shadow": {
            // bg: "red.400",
            boxShadow: "0 0 2px 2px #efdfde",
          },
          // 4. We can override existing variants
          solid: (props) => ({
            bg: props.colorMode === "dark" ? "red.300" : "red.500",
          }),
        },
      },
    },
  })
  export default theme