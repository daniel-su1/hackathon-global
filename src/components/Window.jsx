function Window() {
  <LinkBox
    as="article"
    maxW="20em"
    p="5"
    borderWidth="2px"
    bg={bgGradient}
    padding="0"
    onMouseEnter={() => setIsHovered(true)}
    onMouseLeave={() => setIsHovered(false)}
    margin="1em"
    id={data.id}
  >
    <MotionBox
      zIndex="-1"
      width="100%"
      height="100%"
      position="absolute"
      bg={accentGradient}
      variants={hoverAnimation}
      animate={isHovered ? "hover" : "initial"}
    ></MotionBox>

    <Box bg={accentGradient} padding="15px" position="relative">
      <Flex flexDir="row-reverse">
        <WindowButton />
        <WindowButton />
        <WindowButton />
      </Flex>
    </Box>
    <Box padding="1em">
      <Text fontSize="2xl" fontWeight="bold" my="2">
        <LinkOverlay as={RouterLink} to={`/events/${data.id}`}>
          {data.name}
        </LinkOverlay>
      </Text>
      <Box mb="3">
        {data.speakers.map((speaker, index) => (
          <Text fontSize="large" key={index}>
            {speaker.name}
          </Text>
        ))}
      </Box>
      <Text mb="3">
        {formatDate(data.start_time) +
          " " +
          formatTime(data.start_time) +
          " - " +
          formatTime(data.end_time)}
      </Text>

      <Text mb="3" color="rgba(255, 255, 255, 0.6)">
        {truncateString(data.description, 175)}
      </Text>
      <Tag size="md" variant="solid" bg={tagColor} borderRadius="full">
        {eventType}
      </Tag>
    </Box>
  </LinkBox>;
}
