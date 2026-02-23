/**
 * Full-viewport dark animated background. Fixed behind content; content scrolls over it.
 * Props match the DarkVeil-style API (hueShift, noiseIntensity, speed, etc.) for future swap.
 */
export function DarkVeil({
  hueShift = 0,
  noiseIntensity = 0,
  scanlineIntensity = 0,
  speed = 0.5,
  scanlineFrequency = 0,
  warpAmount = 0,
  resolutionScale = 1,
}) {
  return (
    <div
      className="dark-veil"
      aria-hidden="true"
      style={{
        '--veil-speed': speed,
        '--veil-hue': hueShift,
        '--veil-noise': noiseIntensity,
        '--veil-scanline': scanlineIntensity,
        '--veil-scanline-freq': scanlineFrequency,
        '--veil-warp': warpAmount,
        '--veil-scale': resolutionScale,
      }}
    >
      <div className="dark-veil__gradient" />
      <div className="dark-veil__glow" />
      {noiseIntensity > 0 && <div className="dark-veil__noise" />}
      {scanlineIntensity > 0 && <div className="dark-veil__scanlines" />}
    </div>
  );
}
