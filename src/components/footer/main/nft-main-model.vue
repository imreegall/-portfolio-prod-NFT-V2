<script>
import { defineComponent } from 'vue'
import * as THREE from 'three'
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js"
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js"

export default defineComponent({
  name: "nft-main-model",

  async mounted() {
    const viewBox = this.$refs["three-js"]

    const scene = new THREE.Scene()
    // scene.background = new THREE.Color(0xFFFFFF)

    const camera = new THREE.PerspectiveCamera(
        27,
        1,
        1,
        3500
    )
    camera.position.z = 20
    camera.position.y = 0
    camera.position.x = 0

    const ambiantLight = new THREE.AmbientLight(0xFFFFFF)
    ambiantLight.intensity = 1
    scene.add(ambiantLight)

    const pointLight = new THREE.PointLight( 0xFFFFFF, 1, 100 )
    pointLight.position.set( 0, 0, 0 )
    scene.add(pointLight)

    const directionalLight1 = new THREE.DirectionalLight(0xFFFFFF, 1)
    directionalLight1.position.set(0, 10, 0)
    directionalLight1.target.position.set(-5, 0, 0)
    scene.add(directionalLight1)

    const directionalLight2 = new THREE.DirectionalLight(0xFFFFFF, 0.1)
    directionalLight2.position.set(0, -10, 0)
    directionalLight2.target.position.set(5, 0, 0)
    scene.add(directionalLight2)

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
    })

    renderer.setPixelRatio(window.devicePixelRatio)
    renderer.setSize(Math.min(viewBox.clientWidth, viewBox.clientHeight), Math.min(viewBox.clientWidth, viewBox.clientHeight))
    renderer.setClearColor( 0x000000, 0 )
    renderer.toneMapping = THREE.CineonToneMapping
    renderer.toneMappingExposure = 2
    renderer.shadowMap.enabled = false
    renderer.shadowMap.type = THREE.VSMShadowMap

    window.addEventListener('resize', () => {
      camera.aspect = 1
      // camera.aspect = viewBox.clientWidth / viewBox.clientHeight
      camera.updateProjectionMatrix()
      // camera.clearViewOffset()
      // camera.updateMatrixWorld()
      // camera.updateWorldMatrix()
      // camera.updateMatrix()
      // renderer.setPixelRatio(window.devicePixelRatio)
      renderer.setSize(Math.min(viewBox.clientWidth, viewBox.clientHeight), Math.min(viewBox.clientWidth, viewBox.clientHeight))
      camera.updateProjectionMatrix()
    })

    viewBox.appendChild( renderer.domElement )

    const controls = new OrbitControls(camera, renderer.domElement)
    // controls.autoRotate = true
    // controls.autoRotateSpeed = 200
    controls.addEventListener( 'change', () => renderer.render(scene, camera))
    controls.addEventListener( 'start', () => console.log('start'))
    controls.addEventListener( 'end', (e) => {
      // console.log('end')
      // console.log(controls)
      // console.log(camera)
      // console.log(scene)

      console.log(camera.rotation)

      // camera.rotation.set(camera.rotation.x, 0.4, camera.rotation.z)

      console.log(camera.rotation)

      // camera.position.y = 2
      // camera.position.set(0, 0, 20)
      // this.animate(renderer, scene, camera)
    })
    controls.enableZoom = false
    controls.update()
    controls.dispose()

    // const mesh1 = new THREE.Mesh(
    // new THREE.SphereGeometry(1),
    // new THREE.MeshDepthMaterial())
    // scene.add(mesh1)
    //
    // const mesh2 = new THREE.Mesh(new THREE.PlaneGeometry(10, 10), new THREE.MeshNormalMaterial());
    // mesh2.position.x = 0
    // mesh2.position.y = 0
    // mesh2.position.z = 0
    // mesh2.rotateX(Math.PI / 4 * 2)
    // mesh2.rotateY(Math.PI)
    // scene.add(mesh2)
    //
    // const pointsX = []
    // pointsX.push(new THREE.Vector3(10, 0, 0))
    // pointsX.push(new THREE.Vector3(0, 0, 0))
    //
    // const pointsY = []
    // pointsY.push(new THREE.Vector3(0, 10, 0))
    // pointsY.push(new THREE.Vector3(0, 0, 0))
    //
    // const pointsZ = []
    // pointsZ.push(new THREE.Vector3(0, 0, 10))
    // pointsZ.push(new THREE.Vector3(0, 0, 0))
    //
    // const geometryX = new THREE.BufferGeometry().setFromPoints(pointsX)
    // const geometryY = new THREE.BufferGeometry().setFromPoints(pointsY)
    // const geometryZ = new THREE.BufferGeometry().setFromPoints(pointsZ)
    //
    // const materialX = new THREE.LineBasicMaterial({
    //   color: 0xff0000,
    //   linewidth: 1,
    //   linecap: 'round', //ignored by WebGLRenderer
    //   linejoin: 'round', //ignored by WebGLRenderer
    // })
    //
    // const materialY = new THREE.LineBasicMaterial({
    //   color: 0x00ff00,
    //   linewidth: 1,
    //   linecap: 'round', //ignored by WebGLRenderer
    //   linejoin: 'round', //ignored by WebGLRenderer
    // })
    //
    // const materialZ = new THREE.LineBasicMaterial({
    //   color: 0x0000ff,
    //   linewidth: 1,
    //   linecap: 'round', //ignored by WebGLRenderer
    //   linejoin: 'round', //ignored by WebGLRenderer
    // })
    //
    // const lineX = new THREE.Line(geometryX, materialX)
    // const lineY = new THREE.Line(geometryY, materialY)
    // const lineZ = new THREE.Line(geometryZ, materialZ)
    //
    // scene.add(lineX)
    // scene.add(lineY)
    // scene.add(lineZ)

    const gltfLoader = new GLTFLoader()

    gltfLoader.load("/models/coin2/color.gltf", gltf => {
      gltf.scene.scale.set( 1.2, 1.2, 1.2 )
      gltf.scene.position.x = -0.3
      gltf.scene.position.y = 6.7
      gltf.scene.position.z = 5.865
      gltf.scene.rotateX(Math.PI)
      gltf.scene.rotateZ(- Math.PI / 60)

      scene.add( gltf.scene )

      this.animate(renderer, scene, camera)

      let i = - Math.PI / 240
      setInterval(() => {
        scene.rotateY(i)
        this.animate(renderer, scene, camera)
      }, 10)
    })

    this.animate(renderer, scene, camera)
  },

  methods: {
    animate(renderer, scene, camera) {
      renderer.render(scene, camera)
    }
  }
})
</script>

<template>
  <div class="nft-main-model">
    <div class="three-js" ref="three-js">

    </div>
  </div>
</template>

<style scoped lang="sass">
.nft-main-model
  flex-direction: column
  aspect-ratio: 1.3
  display: flex
  justify-content: center
  align-items: center

  @media (min-width: $bigScreenStart)
    max-width: 1430px
    padding-left: 70px
    padding-right: 70px
    width: 100%

  @media (max-width: $smallScreenEnd), (any-pointer: coarse)
    width: 100%
    padding-left: 12px
    padding-right: 12px
    max-width: 700px

  .three-js
    width: 100%
    height: 100%
    display: flex
    justify-content: center
    align-items: center
</style>