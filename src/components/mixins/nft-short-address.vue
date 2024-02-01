<script>
import { defineComponent } from 'vue'

export default defineComponent({
  computed: {
    shortAddress() {
      if (!this.address) {
        return null
      }

      return this.address.substring(0, 4) + "..." + this.address.substring(this.address.length - 2, this.address.length)
    }
  },
})
</script>