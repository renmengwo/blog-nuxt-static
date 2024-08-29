// canvasEffect.ts
const initCanvasEffect = () => {
  // 封装方法，压缩之后减少文件大小
  function get_attribute(
    node: HTMLElement,
    attr: string,
    default_value: string
  ): string {
    return node.getAttribute(attr) || default_value
  }

  // 封装方法，压缩之后减少文件大小
  function get_by_tagname(name: string): HTMLCollectionOf<Element> {
    return document.getElementsByTagName(name)
  }

  // 获取配置参数
  function get_config_option() {
    const scripts = get_by_tagname('script')
    const script_len = scripts.length
    const script = scripts[script_len - 1] as HTMLScriptElement // 当前加载的script
    return {
      l: script_len, // 长度，用于生成id用
      z: get_attribute(script, 'zIndex', '-1'), // z-index
      o: get_attribute(script, 'opacity', '0.5'), // opacity
      c: get_attribute(script, 'color', '0,0,0'), // color
      n: get_attribute(script, 'count', '99') // count
    }
  }

  // 设置canvas的高宽
  function set_canvas_size() {
    canvas_width = the_canvas.width =
      window.innerWidth ||
      document.documentElement.clientWidth ||
      document.body.clientWidth
    canvas_height = the_canvas.height =
      window.innerHeight ||
      document.documentElement.clientHeight ||
      document.body.clientHeight
  }

  // 随机颜色生成函数
  function get_random_color(): string {
    const r = Math.floor(Math.random() * 256)
    const g = Math.floor(Math.random() * 256)
    const b = Math.floor(Math.random() * 256)
    return `rgba(${r},${g},${b},1)`
  }

  // 绘制过程
  function draw_canvas() {
    context.clearRect(0, 0, canvas_width, canvas_height)
    const all_array = [current_point].concat(random_lines)
    let e: any,
      i: number,
      d: number,
      x_dist: number,
      y_dist: number,
      dist: number

    random_lines.forEach(r => {
      r.x += r.xa
      r.y += r.ya
      r.xa *= r.x > canvas_width || r.x < 0 ? -1 : 1
      r.ya *= r.y > canvas_height || r.y < 0 ? -1 : 1
      context.fillStyle = r.color // 确保使用粒子的颜色
      context.fillRect(r.x - 0.5, r.y - 0.5, 4, 4)

      for (i = 0; i < all_array.length; i++) {
        e = all_array[i]
        if (r !== e && e.x != null && e.y != null) {
          x_dist = r.x - e.x
          y_dist = r.y - e.y
          dist = x_dist * x_dist + y_dist * y_dist

          if (dist < e.max) {
            if (e === current_point && dist >= e.max / 2) {
              r.x -= 0.03 * x_dist
              r.y -= 0.03 * y_dist
            }

            d = (e.max - dist) / e.max
            context.beginPath()
            context.lineWidth = d / 2
            context.strokeStyle =
              'rgba(' + r.color.slice(5, -1) + ',' + (d + 0.2) + ')'
            context.moveTo(r.x, r.y)
            context.lineTo(e.x, e.y)
            context.stroke()
          }
        }
      }

      all_array.splice(all_array.indexOf(r), 1)
    })

    frame_func(draw_canvas)
  }

  // 创建画布，并添加到body中
  const the_canvas = document.createElement('canvas')
  const config = get_config_option()
  const canvas_id = 'c_n' + config.l
  const context = the_canvas.getContext('2d')!
  let canvas_width: number
  let canvas_height: number
  const frame_func =
    window.requestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    window.mozRequestAnimationFrame ||
    window.oRequestAnimationFrame ||
    window.msRequestAnimationFrame ||
    function (func: Function) {
      window.setTimeout(func, 1000 / 45)
    }
  const random = Math.random
  const current_point = {
    x: null as number | null,
    y: null as number | null,
    max: 20000
  }

  the_canvas.id = canvas_id
  the_canvas.style.cssText =
    'position:fixed;top:0;left:0;z-index:' + config.z + ';opacity:' + config.o
  get_by_tagname('body')[0].appendChild(the_canvas)

  set_canvas_size()
  window.onresize = set_canvas_size

  window.onmousemove = function (e: MouseEvent) {
    current_point.x = e.clientX
    current_point.y = e.clientY
  }

  window.onmouseout = function () {
    current_point.x = null
    current_point.y = null
  }

  const random_lines: any[] = []
  for (let i = 0; i < config.n; i++) {
    const x = random() * canvas_width
    const y = random() * canvas_height
    const xa = 2 * random() - 1
    const ya = 2 * random() - 1
    random_lines.push({
      x,
      y,
      xa,
      ya,
      max: 6000,
      color: get_random_color() // 随机颜色
    })
  }

  setTimeout(() => {
    draw_canvas()
  }, 100)
}

export { initCanvasEffect }
