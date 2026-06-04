// PreLoader.jsx
// Shown by Suspense while the Desipallet bundle chunk is being downloaded.
// Mirrors the .pp-pre animation already defined in Desipallet's injected CSS,
// but uses inline styles so it works before that CSS has loaded.

export default function PreLoader() {
  return (
    <div style={styles.wrap}>
      {/* Logo */}
      <div style={styles.logo}>
        DESI<em style={styles.em}>PALLET</em>
      </div>

      {/* Animated pallet icon */}
      <div style={styles.palletWrap}>
        <div style={styles.planksWrap}>
          <div style={{ ...styles.plank, animation: 'plankGrow .4s .2s ease forwards' }} />
          <div style={{ ...styles.plank, animation: 'plankGrow .4s .45s ease forwards' }} />
          <div style={{ ...styles.plank, animation: 'plankGrow .4s .7s ease forwards' }} />
        </div>
        <div style={styles.supportWrap}>
          <div style={{ ...styles.leg, animation: 'legGrow .3s .95s ease forwards' }} />
          <div style={{ ...styles.leg, animation: 'legGrow .3s 1.05s ease forwards' }} />
          <div style={{ ...styles.leg, animation: 'legGrow .3s 1.15s ease forwards' }} />
        </div>
      </div>

      {/* Progress bar */}
      <div style={styles.barTrack}>
        <div style={{ ...styles.barFill, animation: 'barFill 1.8s ease forwards' }} />
      </div>
      <div style={styles.loadingText}>Loading</div>

      {/* Keyframes injected once */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap');
        @keyframes plankGrow { to { transform: scaleX(1); } }
        @keyframes legGrow   { to { transform: scaleY(1); } }
        @keyframes barFill   { from { width: 0 } to { width: 100% } }
      `}</style>
    </div>
  )
}

const styles = {
  wrap: {
    position: 'fixed',
    inset: 0,
    background: '#1C1A17',
    zIndex: 99999,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    fontFamily: "'Bebas Neue', sans-serif",
    fontSize: 48,
    letterSpacing: 3,
    color: '#fff',
    marginBottom: 40,
  },
  em: {
    color: '#D4880A',
    fontStyle: 'normal',
  },
  palletWrap: {
    display: 'flex',
    flexDirection: 'column',
    gap: 5,
    marginBottom: 32,
  },
  planksWrap: {
    display: 'flex',
    flexDirection: 'column',
    gap: 5,
  },
  plank: {
    height: 8,
    borderRadius: 2,
    background: '#C4A882',
    width: 180,
    transform: 'scaleX(0)',
    transformOrigin: 'left',
  },
  supportWrap: {
    display: 'flex',
    gap: 40,
    marginTop: 5,
  },
  leg: {
    width: 30,
    height: 16,
    borderRadius: 2,
    background: '#8B6F4E',
    transform: 'scaleY(0)',
    transformOrigin: 'top',
  },
  barTrack: {
    width: 180,
    height: 2,
    background: 'rgba(255,255,255,.1)',
    borderRadius: 2,
    overflow: 'hidden',
    marginTop: 16,
  },
  barFill: {
    height: '100%',
    background: '#D4880A',
    borderRadius: 2,
    width: 0,
  },
  loadingText: {
    fontFamily: "'Barlow Condensed', 'Barlow', sans-serif",
    fontSize: 11,
    letterSpacing: 3,
    textTransform: 'uppercase',
    color: 'rgba(255,255,255,.3)',
    marginTop: 10,
  },
}
