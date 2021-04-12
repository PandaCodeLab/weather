export default function getCardinal(angle) {
  const degreePerDirection = 360 / 8

  const offsetAngle = angle + degreePerDirection / 2

  return offsetAngle >= 0 * degreePerDirection &&
    offsetAngle < 1 * degreePerDirection
    ? 'Северный'
    : offsetAngle >= 1 * degreePerDirection &&
      offsetAngle < 2 * degreePerDirection
    ? 'Северо-Восточный'
    : offsetAngle >= 2 * degreePerDirection &&
      offsetAngle < 3 * degreePerDirection
    ? 'Восточный'
    : offsetAngle >= 3 * degreePerDirection &&
      offsetAngle < 4 * degreePerDirection
    ? 'Юго-Восточный'
    : offsetAngle >= 4 * degreePerDirection &&
      offsetAngle < 5 * degreePerDirection
    ? 'Южный'
    : offsetAngle >= 5 * degreePerDirection &&
      offsetAngle < 6 * degreePerDirection
    ? 'Юго-Западный'
    : offsetAngle >= 6 * degreePerDirection &&
      offsetAngle < 7 * degreePerDirection
    ? 'Западный'
    : 'Северо-Западный'
}
